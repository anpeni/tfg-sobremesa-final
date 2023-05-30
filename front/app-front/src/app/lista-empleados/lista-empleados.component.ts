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

  private obtenerEmpleados() {
    this.employeeService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato
    })
  }

  ngOnInit(): void {
    this.obtenerEmpleados()

  }

    actualizarEmpleado(id: number) {
      this.router.navigate(['actualizar-empleado',id])

    }

    crearEmpleado(){
      this.router.navigate(['registrar-empleado'])
    }

    crearLaptopId(id: number){
      this.router.navigate(['registrar-laptop-id',id])
    }

    crearSmartphoneId(id: number){
      this.router.navigate(['registrar-smartphone-id',id])
    }

  eliminarE(id: number) {
    
    this.employeeService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados()

    })}

    verD(id: number) {
      
      this.router.navigate(['empleado-detalles', id])
      }

      verDispositivos(id: number) {
      
        this.router.navigate(['lista-laptop-filtrada', id])
        }

  

}
