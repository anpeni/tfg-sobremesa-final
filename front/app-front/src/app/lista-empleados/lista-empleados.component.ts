import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Employee[]

  constructor (private employeeService:EmployeeService) {}

  ngOnInit(): void{
    this.obtenerEmpleado()

  }

  private obtenerEmpleado(){
    this.employeeService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados=dato
    })
  }

}
