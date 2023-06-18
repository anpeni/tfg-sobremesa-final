import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { EmployeeService } from '../employee.service';
import { PageEvent } from '@angular/material/paginator';

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
  totalLength = 0; 
  pageSize = 10; 
  pageSizeOptions: number[] = [5, 10, 20]; 
  pageIndex = 0;
  displayedLaptops: Laptop[] = [];

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.originalLaptops = dato;
      this.laptops = dato;
      this.totalLength = dato.length;
      this.aplicarFiltro();
      this.updatePage();
    })
  }

  crearLaptop(){
    this.router.navigate(['registrar-laptop'])
  }


  // eliminarL(id: number) {
  //   this.employeeService.eliminarLaptop(id).subscribe(dato => {
  //     console.log(dato);
  //     this.originalLaptops = this.originalLaptops.filter(laptop => laptop.id !== id);
  //     this.totalLength = this.originalLaptops.length;
  //     this.updatePage();
  //   })
  // }
  

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
      this.totalLength = this.laptops.length;
      this.updatePage();
    }
  
    updatePage() {
      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;
      this.displayedLaptops = this.laptops.slice(start, end);
    }
    
    changePage(event: PageEvent) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.updatePage();
    }
    
    eliminarL(id: number) {
      this.employeeService.eliminarLaptop(id).subscribe(dato => {
        console.log(dato);
        this.originalLaptops = this.originalLaptops.filter(laptop => laptop.id !== id);
        this.aplicarFiltro();
      })
    }
    

}
