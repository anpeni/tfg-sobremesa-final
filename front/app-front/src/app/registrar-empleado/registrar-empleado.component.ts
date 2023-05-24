import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Employee = new Employee()

  constructor(private employeeService:EmployeeService, private router:Router) {
    
  }

  ngOnInit(): void {
    
  }

  guardarEmpleado(){
    this.employeeService.registrarEmpleado(this.empleado).subscribe(dato=> {
      console.log(dato)
    }, error => console.log(error))
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/employee'])
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
