import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from '../laptop';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado: Employee;
  laptop: Laptop;
  message: string;

  constructor(private route:ActivatedRoute, private empleadoServicio: EmployeeService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleado = new Employee();

    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(
      dato => {
        this.empleado = dato;
      },
      error => {
        if (error.status === 404) {
          this.message = 'Dispositivo disponible.';
        } else {
          this.message = 'Error al obtener datos del empleado.';
        }
      }
    );
  }
}
