import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from '../libro/listar/listar.component';
import { CrearComponent  } from '../libro/crear/crear.component';
import { EditarComponent  } from '../libro/editar/editar.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: ':id/editar',
    component: EditarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
