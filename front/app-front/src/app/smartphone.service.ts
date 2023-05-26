import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Smartphone } from './smartphone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  private baseURL="http://localhost:8080/smartphone";

  constructor(private httpClient:HttpClient) { }

  obtenerListaSmartphone():Observable<Smartphone[]>{
    return this.httpClient.get<Smartphone[]>(`${this.baseURL}`);
  }

  obtenerSmartphone(id:number):Observable<Smartphone>{
    return this.httpClient.get<Smartphone>(`${this.baseURL}/${id}`);
  }

  registrarSmartphone(smartphone: Smartphone):Observable<Object>{
     return this.httpClient.post(`${this.baseURL}`,smartphone)

   }
}

