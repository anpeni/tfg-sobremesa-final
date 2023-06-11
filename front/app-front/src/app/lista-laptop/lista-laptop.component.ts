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

  originalLaptops: Laptop[] = [];
  laptops: Laptop[] = [];
  _filtro = '';

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.originalLaptops = dato;
      this.laptops = dato;
      this.aplicarFiltro();
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

    get filtro() {
      return this._filtro;
    }
  
    set filtro(valor: string) {
      this._filtro = valor;
      this.aplicarFiltro();
    }
  
    aplicarFiltro() {
      const filtroEnMinusculas = this.filtro.toLowerCase();
      this.laptops = this.originalLaptops.filter(
        laptop => laptop.marca.toLowerCase().includes(filtroEnMinusculas) || 
                   laptop.model.toLowerCase().includes(filtroEnMinusculas));
    }

}
