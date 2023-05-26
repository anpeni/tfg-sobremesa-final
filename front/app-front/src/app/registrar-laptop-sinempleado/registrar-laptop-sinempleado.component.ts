import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { LaptopService } from '../laptop.service';
import { Employee } from '../employee';



@Component({
  selector: 'app-registrar-laptop-sinempleado',
  templateUrl: './registrar-laptop-sinempleado.component.html',
  styleUrls: ['./registrar-laptop-sinempleado.component.css']
})
export class RegistrarLaptopSinempleadoComponent implements OnInit{

  laptop: Laptop = new Laptop()
empleados: Employee[];

  constructor(private laptopServicio: LaptopService, private empleadoServicio: EmployeeService, private router: Router) {

  }

  guardarLaptop() {
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

  obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(
      (data) => {
        const almacen = {id: 0, name: 'Almacén', apellidos: '', email: ''};  // Almacén falso
      this.empleados = [almacen, ...data]; 
        
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  irALaListaDeLaptops() {
    this.router.navigate(['/laptops'])
  }

  onSubmit() {
    this.guardarLaptop();
    this.irALaListaDeLaptops()
    
  }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

}
