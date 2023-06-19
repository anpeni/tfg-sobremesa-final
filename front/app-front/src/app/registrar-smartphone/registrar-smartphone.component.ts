// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { catchError, tap, throwError } from 'rxjs';
// import { EmployeeService } from '../employee.service';
// import { Smartphone } from '../smartphone';
// import { SmartphoneService } from '../smartphone.service';

// @Component({
//   selector: 'app-registrar-smartphone',
//   templateUrl: './registrar-smartphone.component.html',
//   styleUrls: ['./registrar-smartphone.component.css']
// })
// export class RegistrarSmartphoneComponent implements OnInit{

//   smartphone: Smartphone = new Smartphone()
//   smartphoneLista: Smartphone[]
//   //empleado: Employee = new Employee()

//   constructor(private smartphoneServicio: SmartphoneService,private empleadoServicio: EmployeeService, private router: Router, private route:ActivatedRoute) {

//   }

//   ngOnInit(): void {
    
//   }


//   guardarSmartphoneId() {
//     this.smartphone.userId = this.route.snapshot.params['id']
//     this.empleadoServicio.registrarSmartphoneId(this.smartphone.userId,this.smartphone).pipe(
//       tap(dato => {
//         console.log(dato);
//       }),
//       catchError(error => {
//         console.log(error);
//         return throwError(() => error);
//       })
//     ).subscribe();
//   }

//   actualizarListaDeSmartphone() {
//     this.smartphoneServicio.obtenerListaSmartphone().subscribe(datos => {
//       this.smartphoneLista = datos;
//     })
//   }
//   irALaListaDeSmartphone() {
//     this.router.navigate(['/smartphones'])
//   }

//   onSubmit() {
    
    
//     this.guardarSmartphoneId();
//     this.actualizarListaDeSmartphone()
//     this.irALaListaDeSmartphone()
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError, concatMap, finalize } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Smartphone } from '../smartphone';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-registrar-smartphone',
  templateUrl: './registrar-smartphone.component.html',
  styleUrls: ['./registrar-smartphone.component.css']
})
export class RegistrarSmartphoneComponent implements OnInit {

  smartphone: Smartphone = new Smartphone()
  smartphoneLista: Smartphone[]

  constructor(
    private smartphoneServicio: SmartphoneService,
    private empleadoServicio: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  guardarSmartphoneId() {
    this.smartphone.userId = this.route.snapshot.params['id'];
    return this.empleadoServicio.registrarSmartphoneId(this.smartphone.userId, this.smartphone).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  actualizarListaDeSmartphone() {
    return this.smartphoneServicio.obtenerListaSmartphone().pipe(
      tap(datos => {
        this.smartphoneLista = datos;
      })
    );
  }

  irALaListaDeSmartphone() {
    this.router.navigate(['/smartphones'])
  }

  onSubmit() {
    this.guardarSmartphoneId().pipe(
      finalize(() => {
        this.actualizarListaDeSmartphone();
        this.irALaListaDeSmartphone();
      })
    ).subscribe();
  }

}

