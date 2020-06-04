import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesComponent } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RegistroModule } from './registro/registro.module';
import { MenuComponent } from './menu/menu.component';
import { PerfilModule } from './perfil/perfil.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NoEncontradoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    RegistroModule,
    PerfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
