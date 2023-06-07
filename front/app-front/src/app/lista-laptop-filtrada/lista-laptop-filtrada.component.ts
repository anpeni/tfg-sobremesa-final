import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute } from '@angular/router';
import { Smartphone } from '../smartphone';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-lista-laptop-filtrada',
  templateUrl: './lista-laptop-filtrada.component.html',
  styleUrls: ['./lista-laptop-filtrada.component.css']
})
export class ListaLaptopFiltradaComponent implements OnInit{
  

  constructor(private laptopService: LaptopService, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private smartphoneService: SmartphoneService) { }

  laptops: Laptop[]
  smartphones: Smartphone[]
  id: number;

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.laptops = dato
    })
  }

  private obtenerLaptopUserId(id: number) {
    this.employeeService.obtenerListaLaptopEmpleado(id).subscribe(dato => {
      this.laptops = dato
    })
  }

  private obtenerSmartphoneUserId(id: number) {
    this.employeeService.obtenerListaSmartphoneEmpleado(id).subscribe(dato => {
      this.smartphones = dato
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

    pasarAlmacen(id: number) {
      this.laptopService.almacenLaptop(id).subscribe(dato => {
        console.log(dato);
        this.obtenerLaptop()
  
      })}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'));
        this.obtenerLaptopUserId(this.id);
        this.obtenerSmartphoneUserId(this.id);
      });
    }

  verD(id: number) {
    this.router.navigate(['empleado-detalles', id])
    }

}

