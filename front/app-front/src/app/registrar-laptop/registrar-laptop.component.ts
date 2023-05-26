import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';
import { catchError, tap, throwError } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registrar-laptop',
  templateUrl: './registrar-laptop.component.html',
  styleUrls: ['./registrar-laptop.component.css']
})
export class RegistrarLaptopComponent implements OnInit{

  laptop: Laptop = new Laptop()

  constructor(private laptopServicio: LaptopService,private empleadoServicio: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  // guardarLaptop() {
  //   this.laptopServicio.registrarLaptop(this.laptop).pipe(
  //     tap(dato => {
  //       console.log(dato);
  //     }),
  //     catchError(error => {
  //       console.log(error);
  //       return throwError(() => error);
  //     })
  //   ).subscribe();
  // }

  guardarLaptopId() {
    this.laptopServicio.registrarLaptop(this.laptop).pipe(
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
    this.router.navigate(['/laptops'])
  }

  onSubmit() {
    
    this.irALaListaDeEmpleados()
    this.guardarLaptop();
  }

}
