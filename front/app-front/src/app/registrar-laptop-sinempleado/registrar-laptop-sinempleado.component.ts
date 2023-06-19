import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { LaptopService } from '../laptop.service';
import { Employee } from '../employee';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registrar-laptop-sinempleado',
  templateUrl: './registrar-laptop-sinempleado.component.html',
  styleUrls: ['./registrar-laptop-sinempleado.component.css']
})
export class RegistrarLaptopSinempleadoComponent implements OnInit{

  laptop: Laptop = new Laptop()
empleados: Employee[];
listaLaptop: Laptop[]

  constructor(private laptopServicio: LaptopService, private empleadoServicio: EmployeeService, private router: Router) {

  }

  guardarLaptop() {
    this.laptopServicio.registrarLaptop(this.laptop).pipe(
      tap(dato => {
        if (dato) {
          Swal.fire({
            title: 'Laptop registrada',
            text: 'La laptop ha sido registrada exitosamente',
            icon: 'success'
          });
        } else {
          Swal.fire({
            title: 'Error al registrar la laptop',
            text: 'Ocurrió un error al registrar la laptop. Por favor, intenta de nuevo',
            icon: 'error'
          });
        }
      }),
      catchError(error => {
        console.error('Error: ' + error);
        return throwError(() => error);
      })
    ).subscribe();
    this.actualizarListaDeLaptop();
    this.irALaListaDeLaptops();
  }

  

  obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(
      (data) => {
        const almacen = {id: 0, name: 'Almacén', apellidos: '', email: '', fechaInicio: new Date(), imageUrl: '', departamento: '', categoria: ''};  // Almacén falso
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

  actualizarListaDeLaptop() {
    this.laptopServicio.obtenerListaLaptop().subscribe(datos => {
      this.listaLaptop = datos;
    })
  }

  onSubmit() {
    this.guardarLaptop();
    this.irALaListaDeLaptops()
    
  }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

}
