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

  originalSmartphones: Smartphone[] = [];
  smartphones: Smartphone[] = [];
  _filtro = '';

  private obtenerSmartphone() {
    this.smartphoneService.obtenerListaSmartphone().subscribe(dato => {
      this.originalSmartphones = dato;
      this.smartphones = dato;
      this.aplicarFiltro();
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

}

