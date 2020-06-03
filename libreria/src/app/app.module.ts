import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesComponent } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RegistroModule } from './registro/registro.module';
import { CrearComponent } from './perfil/crear/crear.component';
import { EditarComponent } from './perfil/editar/editar.component';
import { ListarComponent } from './perfil/listar/listar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NoEncontradoComponent,
    CrearComponent,
    EditarComponent,
    ListarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    RegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
