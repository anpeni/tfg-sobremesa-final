import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/employee";
  private baseURL1="http://localhost:8080/employee/guardarempleado";
  private baseURL2="http://localhost:8080/employee/empleados";
  private baseURL3="http://localhost:8080/employee/savelaptop";
  private baseURL4=" http://localhost:8080/laptop";
 

  constructor(private httpClient:HttpClient) { }

  obtenerListaEmpleados():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  obtenerEmpleado(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }


  registrarEmpleado(empleado: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado)

  }

  registrarLaptopId(id:number, laptop:Laptop):Observable<Object>{
    return this.httpClient.post(`${this.baseURL3}/${id}`,laptop);

  }

  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
  }

  eliminarLaptop(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${id}`);
  }

  actualizarEmpleado(id:number,empleado: Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado)

  }
}
