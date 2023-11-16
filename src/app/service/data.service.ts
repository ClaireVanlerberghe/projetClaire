import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../models/iclient';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private serverURL : string = "http://localhost:3004"


  getAllClient() {
    const clientURL: string = `${this.serverURL}/clients`;
    return this.httpClient.get<IClient[]>(clientURL)
  }

  getOneClient(clientId: string | number) {
    const oneClientURL: string = `${this.serverURL}/clients/${clientId}`;
    return this.httpClient.get<IClient>(oneClientURL)
  }

  
  createClient() {
     const createClientURL: string = ``
   }

  //updateClient

  //deleteClient


}
