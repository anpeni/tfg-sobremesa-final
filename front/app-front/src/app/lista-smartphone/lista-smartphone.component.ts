import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Smartphone } from '../smartphone';
import { SmartphoneService } from '../smartphone.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { catchError, tap, throwError, concatMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-smartphone',
  templateUrl: './lista-smartphone.component.html',
  styleUrls: ['./lista-smartphone.component.css']
})
export class ListaSmartphoneComponent implements OnInit{
  

  constructor(private smartphoneService: SmartphoneService, private employeeService: EmployeeService, private router: Router) { }

  originalSmartphones: Smartphone[] = [];
  smartphones: Smartphone[] = [];
  _filtro = '';
  totalLength = 0; 
  pageSize = 10; 
  pageSizeOptions: number[] = [5, 10, 20]; 
  pageIndex = 0;

  private obtenerSmartphone() {
    this.smartphoneService.obtenerListaSmartphone().subscribe(dato => {
      this.originalSmartphones = dato;
      this.smartphones = dato;
      this.totalLength = dato.length;
      this.aplicarFiltro();
    })
  }

  crearSmartphone(){
    this.router.navigate(['registrar-smartphone'])
  }


  eliminarS(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminará el smartphone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.eliminarSmartphone(id).subscribe(
          dato => {
            console.log(dato);
            Swal.fire(
              'Eliminado!',
              'El smartphone ha sido eliminado.',
              'success'
            );
            this.obtenerSmartphone();
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  ngOnInit(): void {
    this.obtenerSmartphone()
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
      this.smartphones = this.originalSmartphones.filter(
        smartphone => smartphone.marca.toLowerCase().includes(filtroEnMinusculas) || 
                       smartphone.model.toLowerCase().includes(filtroEnMinusculas));
    }

    updatePage() {
      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;
      this.smartphones = this.smartphones.slice(start, end);
      //this.obtenerEmpleados();
    }
  
    changePage(event: PageEvent) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.updatePage();
      this.obtenerSmartphone();
    }

}

