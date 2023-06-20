import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

   originalEmpleados: Employee[] = [];
   empleados: Employee[] = [];
   _filtro = '';
   totalLength = 0; 
   pageSize = 5; 
   //pageSizeOptions: number[] = [5, 10, 20]; 
   pageIndex = 0;
   displayedEmpleados: Employee[] = []; 

  constructor(private employeeService: EmployeeService,  private router: Router) { }

  // private obtenerEmpleados() {
  //   this.employeeService.obtenerListaEmpleados().subscribe(dato => {
  //     this.originalEmpleados = dato;
  //     this.totalLength = dato.length;
  //     this.aplicarFiltro();

  //   })
  // }

  private obtenerEmpleados(): void {
    this.employeeService.obtenerListaEmpleados().subscribe(dato => {
      this.originalEmpleados = dato;
      this.empleados = [...this.originalEmpleados]; // Copia los datos a `empleados` inmediatamente después de obtenerlos
      this.totalLength = dato.length;
      this.aplicarFiltro();
      this.updatePage();
    })
  }
  

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado',id])
  }

  crearEmpleado(){
    this.router.navigate(['registrar-empleado'])
  }

  crearLaptopId(id: number){
    this.router.navigate(['registrar-laptop-id',id])
  }

  crearSmartphoneId(id: number){
    this.router.navigate(['registrar-smartphone-id',id])
  }

  eliminarE(id: number) {
    
    this.employeeService.eliminarEmpleado(id).subscribe(
      data => {
        console.log(data);
        this.obtenerEmpleados();
        //this.updatePage();
      },
      error => {
        console.log('Error:', error);  // Log any errors to the console
      }
    );
}

eliminarEE(id: number) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Se eliminará al empleado",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'No, cancelar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.employeeService.eliminarEmpleado(id).subscribe(
        dato => {
          console.log(dato);
          Swal.fire(
            'Eliminado!',
            'El empleado ha sido eliminado.',
            'success'
          );
          this.obtenerEmpleados();
          //this.actualizarListaEmpleados();
          //this.irALaListaDeEmpleados()
        },
        error => {
          console.log(error);
        });


    }
  });

}


  verD(id: number) {
    this.router.navigate(['empleado-detalles', id])
  }

  verDispositivos(id: number) {
    this.router.navigate(['lista-laptop-filtrada', id])
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
    this.empleados = this.originalEmpleados.filter(
      empleado => empleado.name.toLowerCase().includes(filtroEnMinusculas) || 
                  empleado.apellidos.toLowerCase().includes(filtroEnMinusculas) ||
                  empleado.email.toLowerCase().includes(filtroEnMinusculas));
    this.totalLength = this.empleados.length;
    this.pageIndex = 0;
    this.updatePage();
  }

  updatePage() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedEmpleados = this.empleados.slice(start, end); 
  }

  changePage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePage();
  }

}
