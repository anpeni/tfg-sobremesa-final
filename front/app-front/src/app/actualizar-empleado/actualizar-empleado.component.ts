import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Employee = new Employee()
  listaEmpleados: Employee[]
  id: number

  constructor(private empleadoServicio: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }

  private obtenerEmpleadoCom(id: number) {
    this.empleadoServicio.obtenerEmpleado(id).subscribe(dato => {
      this.empleado = dato
    })
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.obtenerEmpleadoCom(this.id);
      
    });
    

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


  actualizarEmpleadoCom(id:number){
    this.empleadoServicio.actualizarEmpleado(id, this.empleado).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe();
    this.actualizarListaDeEmpleados()
    this.irALaListaDeEmpleados()
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

  onSubmit() {
    this.guardarEmpleado();
    this.actualizarEmpleadoCom(this.id)
    this.irALaListaDeEmpleados()
    
  }

  actualizarListaDeEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(datos => {
      this.listaEmpleados = datos;
    })
  }

}
