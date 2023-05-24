import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Employee = new Employee()

  constructor(private empleadoServicio: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {

  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe();
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

  onSubmit() {
    //this.guardarEmpleado();
    this.irALaListaDeEmpleados()
  }

}
