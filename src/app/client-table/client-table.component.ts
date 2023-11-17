import { AfterViewInit, Component, ViewChild, Injectable } from '@angular/core';

//import material
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { Sort, MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

//import router
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

//import service et model
import { DataService } from '../service/data.service';
import { IClient } from '../models/iclient';
import { CreateModalComponent } from '../create-modal/create-modal.component';


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
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIconModule ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl,  }],
})
export class ClientTableComponent implements AfterViewInit {

  public dataSource: MatTableDataSource<IClient> = new MatTableDataSource<IClient>([]);

  public clients: IClient[] = []
  public client: any;
  public col:string[] = [
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
  // trierData: IClient[];

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dataServ: DataService,
    public dialog: MatDialog,
    iconRegistry: MatIconRegistry) {
    // this.dataSource = new MatTableDataSource<IClient>([]);
    // this.getClients();
    // this.trierData = this.clients.slice()
    
  }
  


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.clients);    
  }


  ngOnInit() {
    this.getClients()
    
    this.sortData(this.sort)
    // this.applyFilter()

  }

  

  getClients() {
    this.dataServ.getAllClient().subscribe((data: IClient[]) => {
      // console.log(data)
    
      
      this.client = data;
    })
    this.col

  }
  

  public applyFilter(e: any) {
    this.col
    // const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    
    console.log(this.client);
    const eventValue = e.target.value.trim().toLowerCase()
     //this.dataSource.filter = eventValue
     //const filterData = this.client.filter((element: { nom: string; }) => element.nom.toLowerCase().includes(eventValue))
     //console.log(eventValue);
     
     
  }

  sortData(sort: Sort) {
    const data = this.client.slice();
    if (!sort.active || sort.direction === '') {
      this.client = data;
      return;
    }
    this.client = data.sort((a: any, b: any) => {
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
  }



}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}



//Bouton du tableau qui ouvre la modale pour modifier client;

@Component({
  selector: 'app-edit-button',
  templateUrl: '../edit-button/edit-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class EditButtonComponent {


  
}



//Bouton du tableau qui ouvre la modale pour supprimer client;

// @Component({
//   selector: 'app-delete-button',
//   templateUrl: '../delete-button/delete-button.component.html',
//   styleUrls: ['../delete-button/delete-button.component.scss']
// })
// export class DeleteButtonComponent {

// }

