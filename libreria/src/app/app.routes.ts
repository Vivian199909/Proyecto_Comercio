import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rutas: Routes=[
    {
        path:"inicio",
        component: HomeComponent,
    },
    {
      path: 'registro',
      loadChildren: ()=>import('./registro/registro.module')
      .then(registro=>registro.RegistroModule)
    },
]
@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppRoutesComponent {}
