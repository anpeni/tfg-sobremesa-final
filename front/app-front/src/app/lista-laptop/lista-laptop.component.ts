import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-lista-laptop',
  templateUrl: './lista-laptop.component.html',
  styleUrls: ['./lista-laptop.component.css']
})
export class ListaLaptopComponent implements OnInit{
  

  constructor(private laptopService: LaptopService, private employeeService: EmployeeService, private router: Router) { }

  laptops: Laptop[]

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.laptops = dato
    })
  }

  crearLaptop(){
    this.router.navigate(['registrar-laptop'])
  }


  eliminarL(id: number) {
    this.employeeService.eliminarLaptop(id).subscribe(dato => {
      console.log(dato);
      this.obtenerLaptop()

    })}

  ngOnInit(): void {
    this.obtenerLaptop()
  }

  verD(id: number) {
    this.router.navigate(['empleado-detalles', id])
    }

}
