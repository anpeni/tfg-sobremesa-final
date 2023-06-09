// import { Component, OnInit } from '@angular/core';
// import { catchError, tap, throwError } from 'rxjs';
// import { Employee } from '../employee';
// import { Smartphone } from '../smartphone';
// import { SmartphoneService } from '../smartphone.service';
// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-registrar-smartphone-sinempleado',
//   templateUrl: './registrar-smartphone-sinempleado.component.html',
//   styleUrls: ['./registrar-smartphone-sinempleado.component.css']
// })
// export class RegistrarSmartphoneSinempleadoComponent implements OnInit{

//   smartphone: Smartphone = new Smartphone()
//   empleados: Employee[];
//   listaSmartphone: Smartphone[]

//   constructor(private smartphoneServicio: SmartphoneService, private empleadoServicio: EmployeeService, private router: Router) {

//   }

//   guardarSmartphone() {
//     this.smartphoneServicio.registrarSmartphone(this.smartphone).pipe(
//       tap(dato => {
//         console.log(dato);
//       }),
//       catchError(error => {
//         console.log(error);
//         return throwError(() => error);
//       })
//     ).subscribe();
//     //this.actualizarListaDeSmartphone()
//     //this.irALaListaDeSmartphone()
//   }



//   obtenerEmpleados() {
//     this.empleadoServicio.obtenerListaEmpleados().subscribe(
//       (data) => {
//         const almacen = {id: 0, name: 'Almacén', apellidos: '', email: ''};  // Almacén falso
//       this.empleados = [almacen, ...data]; 
        
//       },
//       (error) => {
//         console.error('Error:', error);
//       }
//     );
//   }

//   irALaListaDeSmartphone() {
//     this.router.navigate(['/smartphones'])
//   }

//   actualizarListaDeSmartphone() {
//     this.smartphoneServicio.obtenerListaSmartphone().subscribe(datos => {
//       this.listaSmartphone = datos;
//     })
//   }

//   onSubmit() {
//     this.guardarSmartphone();
//     this.actualizarListaDeSmartphone()
//     this.irALaListaDeSmartphone()
    
//   }
//   ngOnInit(): void {
//     this.obtenerEmpleados();
//   }

// }


import { Component, OnInit } from '@angular/core';
import { catchError, tap, throwError, concatMap } from 'rxjs';
import { Employee } from '../employee';
import { Smartphone } from '../smartphone';
import { SmartphoneService } from '../smartphone.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-smartphone-sinempleado',
  templateUrl: './registrar-smartphone-sinempleado.component.html',
  styleUrls: ['./registrar-smartphone-sinempleado.component.css']
})
export class RegistrarSmartphoneSinempleadoComponent implements OnInit {

  smartphone: Smartphone = new Smartphone()
  empleados: Employee[];
  listaSmartphone: Smartphone[]

  constructor(private smartphoneServicio: SmartphoneService, private empleadoServicio: EmployeeService, private router: Router) { }

  guardarSmartphone() {
    return this.smartphoneServicio.registrarSmartphone(this.smartphone).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(
      (data) => {
        const almacen = { id: 0, name: 'Almacén', apellidos: '', email: '' };  // Almacén falso
        this.empleados = [almacen, ...data];
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  irALaListaDeSmartphone() {
    this.router.navigate(['/smartphones'])
  }

  actualizarListaDeSmartphone() {
    return this.smartphoneServicio.obtenerListaSmartphone().pipe(
      tap(datos => {
        this.listaSmartphone = datos;
      })
    );
  }

  onSubmit() {
    this.guardarSmartphone().pipe(
      concatMap(() => this.actualizarListaDeSmartphone())
    ).subscribe(() => this.irALaListaDeSmartphone());
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

}

