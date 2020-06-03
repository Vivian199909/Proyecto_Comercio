import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [ListarComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule {}
