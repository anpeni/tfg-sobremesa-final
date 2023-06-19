import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Employee = new Employee()
  listaEmpleados: Employee[]
  fechaInicio: Date;
  

  constructor(private empleadoServicio: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {

  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
      tap(dato => {
        if (dato) {
          Swal.fire({
            title: 'Empleado creado',
            text: 'El empleado ha sido creado exitosamente',
            icon: 'success'
          });
        } else {
          Swal.fire({
            title: 'Error al crear empleado',
            text: 'Ocurrió un error al crear el empleado. Por favor, intenta de nuevo',
            icon: 'error'
          });
        }
      }),
      catchError(error => {
        console.error('Error: ' + error);
        return throwError(() => error);
      })
    ).subscribe();
    this.actualizarListaDeEmpleados();
    this.irALaListaDeEmpleados();
  }


  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

   actualizarListaDeEmpleados() {
     this.empleadoServicio.obtenerListaEmpleados().subscribe(datos => {
       this.listaEmpleados = datos;
     })
   }

  onSubmit() {
    this.guardarEmpleado();
    this.actualizarListaDeEmpleados()
    this.irALaListaDeEmpleados()
    
  }

}
