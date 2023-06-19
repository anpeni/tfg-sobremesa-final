import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { EmployeeService } from '../employee.service';
import { PageEvent } from '@angular/material/paginator';
import { catchError, tap, throwError, concatMap } from 'rxjs';
import Swal from 'sweetalert2';

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

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.originalLaptops = dato;
      this.laptops = dato;
      this.totalLength = dato.length;
      this.aplicarFiltro();
      
    })
  }

  crearLaptop(){
    this.router.navigate(['registrar-laptop'])
  }


  eliminarL(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminará la laptop',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.eliminarLaptop(id).subscribe(
          dato => {
            console.log(dato);
            Swal.fire(
              'Eliminado!',
              'La laptop ha sido eliminada.',
              'success'
            );
           
            this.obtenerLaptop();
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

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

    updatePage() {
      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;
      this.laptops = this.laptops.slice(start, end);
      //this.obtenerEmpleados();
    }
  
    changePage(event: PageEvent) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.updatePage();
      this.obtenerLaptop();
    }

}
