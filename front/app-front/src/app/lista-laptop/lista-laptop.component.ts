import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-lista-laptop',
  templateUrl: './lista-laptop.component.html',
  styleUrls: ['./lista-laptop.component.css']
})
export class ListaLaptopComponent implements OnInit{

  constructor(private laptopService: LaptopService,  private router: Router) { }

  laptops: Laptop[]

  private obtenerLaptop() {
    this.laptopService.obtenerListaLaptop().subscribe(dato => {
      this.laptops = dato
    })
  }

  crearLaptop(){
    this.router.navigate(['registrar-laptop'])
  }

  crearLaptopId(){
    this.router.navigate(['registrar-laptop-id'])
  }

  ngOnInit(): void {
    this.obtenerLaptop()
  }

}
