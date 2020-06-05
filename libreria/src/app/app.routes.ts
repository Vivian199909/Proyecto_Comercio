import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
      path:"login",
      component: LoginComponent,
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppRoutesComponent {}
