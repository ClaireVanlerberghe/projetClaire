import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  ID: number;
  mail: number;
  adress: string;
  pdg: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'Hydrogen', mail: 1.0079, adress: 'H', pdg: "josé"},
  {ID: 2, name: 'Helium', mail: 4.0026, adress: 'He', pdg: "josé"},
  {ID: 3, name: 'Lithium', mail: 6.941, adress: 'Li', pdg: "josé"},
  {ID: 4, name: 'Beryllium', mail: 9.0122, adress: 'Be', pdg: "josé"},
  {ID: 5, name: 'Boron', mail: 10.811, adress: 'B', pdg: "josé"},
  {ID: 6, name: 'Carbon', mail: 12.0107, adress: 'C', pdg: "josé"},
  {ID: 7, name: 'Nitrogen', mail: 14.0067, adress: 'N', pdg: "josé"},
  {ID: 8, name: 'Oxygen', mail: 15.9994, adress: 'O', pdg: "josé"},
  {ID: 9, name: 'Fluorine', mail: 18.9984, adress: 'F', pdg: "josé"},
  {ID: 10, name: 'Neon', mail: 20.1797, adress: 'Ne', pdg: "josé"},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class ClientTableComponent {
  displayedColumns: string[] = ['id', 'name', 'mail', 'adress', 'pdg'];
  dataSource = ELEMENT_DATA;
}
