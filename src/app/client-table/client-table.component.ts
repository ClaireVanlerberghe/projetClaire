import { AfterViewInit, Component, ViewChild, Injectable, Inject } from '@angular/core';

//import material
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Sort, MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import router
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { Subject } from 'rxjs';

//import service et model
import { DataService } from '../service/data.service';
import { IClient } from '../models/iclient';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';



@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `Première page`;
  itemsPerPageLabel = `Clients par page:`;
  lastPageLabel = `Dernière page`;


  nextPageLabel = 'Page suivante';
  previousPageLabel = 'Page précédente';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 sur 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} sur ${amountPages}`;
  }
}

//Tableau avec données


@Component({
  selector: 'app-client-table',
  styleUrls: ['./client-table.component.scss'],
  templateUrl: './client-table.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIconModule],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl, }],
})
export class ClientTableComponent {

  // TODO un peu complexe à typer, on ignore pour l'instant
  public dataSource: any;
  currentPage = 1;
  public clients: IClient[] = []
  
  public pageEvent: PageEvent | null = null;
  datasource: null = null;
  pageIndex: number = 1;
  pageSize: number = 0;
  length: number = 0;



  public itemsToDisplay = 10;

  public col: string[] = [
    "id",
    "nom",
    "prenom",
    "nomPDG",
    "email",
    "adressePostale",
    "ville",
    "typeClient",
    "dateCreation",
    "edition",
    "suppression"
  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dataServ: DataService,
    public dialog: MatDialog,
    iconRegistry: MatIconRegistry) {
  }


  ngOnInit() {
    this.getClients()

    

  }

  openDelete(client: IClient) {
    const dialogRef = this.dialog.open(DeleteButtonComponent, { data: {client} });

    dialogRef.afterClosed().subscribe(result => {
      this.getClients()
    });
  }

  getClients() {
    this.dataServ.getAllClient().subscribe((data: IClient[]) => {
      this.clients = data;
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.length = this.dataSource.data?.length
      this.pageIndex = 0;
    

      this.dataSource.filteredData = this.clients.slice(0, this.itemsToDisplay);
    })

  }



  public applyFilter(e: any) {
    // console.log(" this.client", this.client)
    let filterValue = (e.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    const filterPredicate = (data: any): boolean => {
      const name = data.nom.toLowerCase();
      return name.includes(filterValue);
    };
    this.dataSource.filteredData = this.dataSource.data.filter((data: any) => filterPredicate(data));
  }

  paginationChange(e: any): any {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    if (e.previousPageIndex !== e.pageIndex) {
      const startDisplayData = (this.currentPage) * this.pageSize;
      const endDisplayData = startDisplayData + this.pageSize;
      this.dataSource.filteredData = this.dataSource.data.slice(startDisplayData, endDisplayData);
    } else {
      this.dataSource.filteredData = this.dataSource.data.slice(0, this.pageSize);
    }


  }



  sortData(sort: Sort) {
    if (this.clients) {
      const data = this.clients.slice();
      if (!sort.active || sort.direction === '') {
        this.dataSource.filteredData = data;
        
        return;
      }
      data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'id':
            return compare(a.id, b.id, isAsc);
          case 'nom':
            return compare(a.nom, b.nom, isAsc);
          case 'prenom':
            return compare(a.prenom, b.prenom, isAsc);
          case 'nomPDG':
            return compare(a.nomPDG, b.nomPDG, isAsc);
          case 'email':
            return compare(a.email, b.email, isAsc);
          case 'adressePostale':
            return compare(a.adressePostale, b.adressePostale, isAsc);
          case 'ville':
            return compare(a.ville, b.ville, isAsc);
          case 'typeClient':
            return compare(a.typeClient, b.typeClient, isAsc);
          case 'dateCreation':
            return compare(a.dateCreation, b.dateCreation, isAsc);
          default:
            return 0;
        }
      })
      
      this.dataSource.filteredData = data.slice(0, this.itemsToDisplay)
    }
  }


}
// voir doc Generics
function compare<T extends number | string | Date>(a: T, b: T, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}

