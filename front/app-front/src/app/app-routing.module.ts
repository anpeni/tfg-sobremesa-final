import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarLaptopComponent } from './registrar-laptop/registrar-laptop.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaLaptopComponent } from './lista-laptop/lista-laptop.component';
export const routes: Routes = [
  {path: "empleados",component:ListaEmpleadosComponent},
  {path: "laptops",component:ListaLaptopComponent},
  {path: "", redirectTo: "empleados", pathMatch: "full"},
  {path: "registrar-empleado",component:RegistrarEmpleadoComponent},
  //{path: "registrar-laptop",component:RegistrarLaptopComponent},
  {path: "registrar-laptop-id/:id",component:RegistrarLaptopComponent},
  {path: "actualizar-empleado/:id",component:ActualizarEmpleadoComponent},
  {path: "empleado-detalles/:id",component:EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
