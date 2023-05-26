import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Employee } from './employee';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private baseURL="http://localhost:8080/laptop";

  constructor(private httpClient:HttpClient) { }

  obtenerListaLaptop():Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseURL}`);
  }

  obtenerLaptop(id:number):Observable<Laptop>{
    return this.httpClient.get<Laptop>(`${this.baseURL}/${id}`);
  }

  registrarLaptop(laptop: Laptop):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,laptop)

  }
}
