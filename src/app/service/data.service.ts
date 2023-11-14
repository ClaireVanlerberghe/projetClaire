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


}
