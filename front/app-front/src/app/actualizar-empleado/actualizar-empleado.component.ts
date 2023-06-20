// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { catchError, tap, throwError } from 'rxjs';

// @Component({
//   selector: 'app-actualizar-empleado',
//   templateUrl: './actualizar-empleado.component.html',
//   styleUrls: ['./actualizar-empleado.component.css']
// })
// export class ActualizarEmpleadoComponent implements OnInit {

//   empleado: Employee = new Employee()
//   listaEmpleados: Employee[]
//   id: number

//   constructor(private empleadoServicio: EmployeeService, private router: Router, private route: ActivatedRoute) {

//   }

//   private obtenerEmpleadoCom(id: number) {
//     this.empleadoServicio.obtenerEmpleado(id).subscribe(dato => {
//       this.empleado = dato
//     })
//   }

//   ngOnInit(): void {

//     this.route.paramMap.subscribe(params => {
//       this.id = Number(params.get('id'));
//       this.obtenerEmpleadoCom(this.id);
      
//     });
    

//   }

//   guardarEmpleado() {
//     this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
//       tap(dato => {
//         console.log(dato);
//       }),
//       catchError(error => {
//         console.log(error);
//         return throwError(() => error);
//       })
//     ).subscribe();
//   }


//   actualizarEmpleadoCom(id:number){
//     this.empleadoServicio.actualizarEmpleado(id, this.empleado).pipe(
//       tap(dato => {
//         console.log(dato);
//       }),
//       catchError(error => {
//         console.log(error);
//         return throwError(() => error);
//       })
//     ).subscribe();
//     this.actualizarListaDeEmpleados()
//     this.irALaListaDeEmpleados()
//   }

//   irALaListaDeEmpleados() {
//     this.router.navigate(['/empleados'])
//   }
//   private obtenerEmpleados() {
//     this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
//       this.listaEmpleados = dato
//     })
//   }
//   eliminarE(id: number) {
    
//     this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
//       console.log(dato);
//       this.obtenerEmpleados()

//     })}

//     cancelar() {
//       this.router.navigate(['/']);  // Cambia esto a donde quieras que el usuario sea redirigido
//     }

//   onSubmit() {
//     this.guardarEmpleado();
//     this.actualizarEmpleadoCom(this.id)
//     this.actualizarListaDeEmpleados()
//     this.irALaListaDeEmpleados()
    
//   }

//   actualizarListaDeEmpleados() {
//     this.empleadoServicio.obtenerListaEmpleados().subscribe(datos => {
//       this.listaEmpleados = datos;
//     })
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError, concatMap } from 'rxjs';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Employee = new Employee()
  listaEmpleados: Employee[]
  id: number

  constructor(private changeDetector: ChangeDetectorRef,private empleadoServicio: EmployeeService, private router: Router, private route: ActivatedRoute) {

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
    ).subscribe(() => {
      Swal.fire({
        title: '¡Hecho!',
        text: 'El empleado ha sido actualizado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.actualizarListaDeEmpleados();
      this.irALaListaDeEmpleados();
    });
}

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

  eliminarEE(id: number) {
    this.empleadoServicio.eliminarEmpleado(id).pipe(
      concatMap(dato => {
        console.log(dato);
        return this.empleadoServicio.obtenerListaEmpleados();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe(dato => {
      this.listaEmpleados = dato;
      this.irALaListaDeEmpleados()
    });
    
  }

  eliminarE(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se eliminará al empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(
          dato => {
            console.log(dato);
            Swal.fire(
              'Eliminado!',
              'El empleado ha sido eliminado.',
              'success'
            );
            
            this.actualizarListaEmpleados();
            this.irALaListaDeEmpleados()
          },
          error => {
            console.log(error);
          });


      }
    });

  }
  
  actualizarListaEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(
      listaActualizada => {
        this.listaEmpleados = listaActualizada;
        this.irALaListaDeEmpleados();
        this.changeDetector.detectChanges();
      },
      error => {
        console.log(error);
      });
  }
  
  
  
  
  
  
  
  
  

  secuenciaEliminar(id: number){
    this.eliminarE(this.id)
    this.actualizarListaDeEmpleados()
    this.irALaListaDeEmpleados()

  }

  secuenciaActualizar(id: number){
    this.guardarEmpleado();
    this.actualizarEmpleadoCom(this.id)
    this.actualizarListaDeEmpleados()
    this.irALaListaDeEmpleados()

  }
  

  cancelar() {
    this.router.navigate(['/']);  // Cambia esto a donde quieras que el usuario sea redirigido
  }

  onSubmit() {
    // this.guardarEmpleado();
    // this.actualizarEmpleadoCom(this.id)
    // this.actualizarListaDeEmpleados()
    // this.irALaListaDeEmpleados()
  }

  actualizarListaDeEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(datos => {
      this.listaEmpleados = datos;
    })
  }

}

