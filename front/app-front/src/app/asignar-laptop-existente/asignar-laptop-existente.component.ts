import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { catchError, tap, throwError, concatMap } from 'rxjs';

@Component({
  selector: 'app-asignar-laptop-existente',
  templateUrl: './asignar-laptop-existente.component.html',
  styleUrls: ['./asignar-laptop-existente.component.css']
})
export class AsignarLaptopExistenteComponent implements OnInit{

  laptop: Laptop = new Laptop()
  empleado: Employee = new Employee()
  id: number
  selectedLaptopId: number;
  nuevoLaptop: Laptop
  
  listaLaptop: Laptop[]

  constructor(private laptopServicio: LaptopService, private empleadoServicio: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }

  private obtenerEmpleadoCom(id: number) {
    this.empleadoServicio.obtenerEmpleado(id).subscribe(dato => {
      this.empleado = dato
    })
  }

  private obtenerListaLaptop() {
    this.laptopServicio.obtenerListaLaptop().subscribe(dato => {
      this.listaLaptop = dato;  
    })
  }

  private obtenerLaptopSeleccionado(id: number) {
    this.laptopServicio.obtenerLaptop(id).subscribe(dato => {
      this.laptop = dato
    })
  }

  irALaListaDeLaptops() {
    this.router.navigate(['/laptops'])
  }

  actualizarLaptopAsignado(id:number){
    this.laptopServicio.actualizarLaptop(id, this.laptop).pipe(
      tap(dato => {
        console.log(dato);
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe();
    // this.actualizarListaDeEmpleados()
    // this.actualizarListaDeEmpleados()
    // this.irALaListaDeEmpleados()
  }

  onSubmit(): void {
    this.obtenerLaptopSeleccionado(this.selectedLaptopId);

    this.actualizarLaptopAsignado(this.selectedLaptopId);
  }


  ngOnInit(): void {
    this.obtenerListaLaptop();
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.obtenerEmpleadoCom(this.id);
    
  })
}

}



