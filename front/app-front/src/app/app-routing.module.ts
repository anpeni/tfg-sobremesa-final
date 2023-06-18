import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarLaptopComponent } from './registrar-laptop/registrar-laptop.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaLaptopComponent } from './lista-laptop/lista-laptop.component';
import { RegistrarLaptopSinempleadoComponent } from './registrar-laptop-sinempleado/registrar-laptop-sinempleado.component';
import { ListaSmartphoneComponent } from './lista-smartphone/lista-smartphone.component';
import { RegistrarSmartphoneComponent } from './registrar-smartphone/registrar-smartphone.component';
import { RegistrarSmartphoneSinempleadoComponent } from './registrar-smartphone-sinempleado/registrar-smartphone-sinempleado.component';
import { VerDispositivosComponent } from './ver-dispositivos/ver-dispositivos.component';
import { ListaLaptopFiltradaComponent } from './lista-laptop-filtrada/lista-laptop-filtrada.component';
import { PortadaComponent } from './portada/portada.component';
import { AsignarLaptopExistenteComponent } from './asignar-laptop-existente/asignar-laptop-existente.component';

export const routes: Routes = [
  {path: "empleados",component:ListaEmpleadosComponent},
  {path: "portada",component:PortadaComponent},
  {path: "laptops",component:ListaLaptopComponent},
  {path: "smartphones",component:ListaSmartphoneComponent},
  {path: "", redirectTo: "empleados", pathMatch: "full"},
  {path: "registrar-empleado",component:RegistrarEmpleadoComponent},
  {path: "asignar-laptop-existente/:id",component:AsignarLaptopExistenteComponent},
  {path: "registrar-laptop",component:RegistrarLaptopSinempleadoComponent},
  {path: "registrar-laptop-id/:id",component:RegistrarLaptopComponent},
  {path: "registrar-smartphone",component:RegistrarSmartphoneSinempleadoComponent},
  {path: "registrar-smartphone-id/:id",component:RegistrarSmartphoneComponent},
  {path: "actualizar-empleado/:id",component:ActualizarEmpleadoComponent},
  {path: "empleado-dispositivos/:id",component:VerDispositivosComponent},
  {path: "lista-laptop-filtrada/:id",component:ListaLaptopFiltradaComponent},
  {path: "empleado-detalles/:id",component:EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
