import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Smartphone } from '../smartphone';
import { SmartphoneService } from '../smartphone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-smartphone',
  templateUrl: './lista-smartphone.component.html',
  styleUrls: ['./lista-smartphone.component.css']
})
export class ListaSmartphoneComponent implements OnInit{
  

  constructor(private smartphoneService: SmartphoneService, private employeeService: EmployeeService, private router: Router) { }

  smartphones: Smartphone[]

  private obtenerSmartphone() {
    this.smartphoneService.obtenerListaSmartphone().subscribe(dato => {
      this.smartphones = dato
    })
  }

  crearSmartphone(){
    this.router.navigate(['registrar-smartphone'])
  }


  eliminarS(id: number) {
    this.employeeService.eliminarSmartphone(id).subscribe(dato => {
      console.log(dato);
      this.obtenerSmartphone()

    })}

  ngOnInit(): void {
    this.obtenerSmartphone()
  }

  verD(id: number) {
    this.router.navigate(['empleado-detalles', id])
    }

}

