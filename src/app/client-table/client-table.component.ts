import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataService } from '../service/data.service';
import { IClient } from '../models/iclient';




/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-client-table',
  styleUrls: ['./client-table.component.scss'],
  templateUrl: './client-table.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class ClientTableComponent implements AfterViewInit {
  
  dataSource: MatTableDataSource<IClient> = new MatTableDataSource<IClient>([]);


  public clients: IClient[] = []
  public client: any;
  public col: any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dataServ: DataService) {
    this.dataSource = new MatTableDataSource<IClient>([]);
    this.getClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.dataServ.getAllClient().subscribe((data: IClient[]) => {
      console.log(data)
      this.client = data;
    })
    this.col = [
      "id",
      "nom",
      "prenom",
      "nomPDG",
      "email",
      "adressePostale",
      "ville",
      "typeClient",
      "dateCreation"
    ];
  }
}


