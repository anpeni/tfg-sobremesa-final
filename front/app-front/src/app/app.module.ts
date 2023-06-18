import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaLaptopComponent } from './lista-laptop/lista-laptop.component';
import { RegistrarLaptopComponent } from './registrar-laptop/registrar-laptop.component';
import { RegistrarLaptopSinempleadoComponent } from './registrar-laptop-sinempleado/registrar-laptop-sinempleado.component';
import { ListaSmartphoneComponent } from './lista-smartphone/lista-smartphone.component';
import { RegistrarSmartphoneComponent } from './registrar-smartphone/registrar-smartphone.component';
import { RegistrarSmartphoneSinempleadoComponent } from './registrar-smartphone-sinempleado/registrar-smartphone-sinempleado.component';
import { VerDispositivosComponent } from './ver-dispositivos/ver-dispositivos.component';
import { ListaLaptopFiltradaComponent } from './lista-laptop-filtrada/lista-laptop-filtrada.component';
import { PortadaComponent } from './portada/portada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsignarLaptopExistenteComponent } from './asignar-laptop-existente/asignar-laptop-existente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    ListaLaptopComponent,
    RegistrarLaptopComponent,
    RegistrarLaptopSinempleadoComponent,
    ListaSmartphoneComponent,
    RegistrarSmartphoneComponent,
    RegistrarSmartphoneSinempleadoComponent,
    VerDispositivosComponent,
    ListaLaptopFiltradaComponent,
    PortadaComponent,
    AsignarLaptopExistenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
