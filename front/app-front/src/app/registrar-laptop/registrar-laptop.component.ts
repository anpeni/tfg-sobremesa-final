import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop';
import { catchError, tap, throwError } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-laptop',
  templateUrl: './registrar-laptop.component.html',
  styleUrls: ['./registrar-laptop.component.css']
})
export class RegistrarLaptopComponent implements OnInit{

  laptop: Laptop = new Laptop()
  //empleado: Employee = new Employee()

  constructor(private laptopServicio: LaptopService,private empleadoServicio: EmployeeService, private router: Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    
  }


  guardarLaptopId() {
    this.laptop.userId = this.route.snapshot.params['id']
    this.empleadoServicio.registrarLaptopId(this.laptop.userId,this.laptop).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe();
  }

  irALaListaDeLaptops() {
    this.router.navigate(['/laptops'])
  }

  onSubmit() {
    
    
    this.guardarLaptopId();
    this.irALaListaDeLaptops()
  }

}
