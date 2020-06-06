import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { CarritoComponent } from './carrito/carrito.component';

const rutas: Routes=[
    {
        path:"inicio",
        component: HomeComponent,
    },
    {
        path:"",
        redirectTo:'inicio',
        pathMatch:'full',
    },
    {
      path: 'registro',
      loadChildren: ()=>import('./registro/registro.module')
      .then(registro=>registro.RegistroModule)
    },
    {
      path: 'perfil',
      loadChildren: ()=>import('./perfil/perfil.module')
      .then(perfil=>perfil.PerfilModule)
    },
    {
      path: 'libro',
      loadChildren: ()=>import('./libro/libro.module')
      .then(libro=>libro.LibroModule)
    },
    {
      path:"login",
      component: LoginComponent,
    },
    {
      path:"carrito",
      component: CarritoComponent,
    },
    {
      path: '**',
      component:NoEncontradoComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppRoutesComponent {}
