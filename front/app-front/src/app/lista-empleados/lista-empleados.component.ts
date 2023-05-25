import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Employee[]

  constructor(private employeeService: EmployeeService,  private router: Router) { }

  private obtenerEmpleado() {
    this.employeeService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato
    })
  }

  ngOnInit(): void {
    this.obtenerEmpleado()

  }

    actualizarEmpleado(id: number) {
      this.router.navigate(['actualizar-empleado',id])

    }

    crearEmpleado(){
      this.router.navigate(['registrar-empleado'])
    }

  eliminarE(id: number) {
    this.employeeService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleado()

    })}

    verD(id: number) {
      this.router.navigate(['empleado-detalles', id])
      }

  

}
