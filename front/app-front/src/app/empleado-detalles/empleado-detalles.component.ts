import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number
  empleado: Employee

  constructor(private route:ActivatedRoute, private empleadoServicio: EmployeeService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleado = new Employee()
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(dato=>{
      this.empleado = dato
    })
    
  }




}
