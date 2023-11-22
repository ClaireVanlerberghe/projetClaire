import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../models/iclient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private serverURL: string = "http://localhost:3004"

  //Récupération de tout les clients
  getAllClient() {
    const clientURL: string = `${this.serverURL}/clients`;
    return this.httpClient.get<IClient[]>(clientURL)
  }

  //Récupération de un client
  getOneClient(clientId: string | number) {
    const oneClientURL: string = `${this.serverURL}/clients/${clientId}`;
    return this.httpClient.get<IClient>(oneClientURL)
  }

  //Création d'un client
  createClient(client: IClient) {
    const createClientURL: string = `${this.serverURL}/clients`
    return this.httpClient.post<IClient>(createClientURL, client)
  }

  //Mise à jour d'un client
  updateClient(client: IClient, clientId: string | number) {
    const updateClientURL: string = `${this.serverURL}/clients/${clientId}`
    return this.httpClient.put<IClient>(updateClientURL, client)
  }

  //Suppression d'un client
  deleteClient(clientId: IClient['id']) {
    const deleteClientURL: string = `${this.serverURL}/clients/${clientId}`
    return this.httpClient.delete<IClient>(deleteClientURL)
  }
}
