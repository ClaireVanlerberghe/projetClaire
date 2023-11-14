import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../service/data.service';
import { IClient } from '../models/iclient';


@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class ClientTableComponent {
  public clients: IClient[] = []

  public col: any;
  public client: any

  constructor(public dataServ: DataService) { }


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
