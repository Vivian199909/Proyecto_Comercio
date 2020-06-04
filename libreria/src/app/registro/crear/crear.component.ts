import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  nombres='';
  apellidos='';
  direccion='';
  correo='';
  telefono1='';
  telefono2='';
  pass='';
  idPerfil='';
  constructor(
    private readonly _loginService: LoginService,
  ) { }

  ngOnInit(): void {

  }
  ingresar(){
    this._loginService.crearCredenciales({
      nombres:'vivian barbara',
      apellidos:'lopez tipan' ,
      direccion:'villas aurora',
      correo:'vtipan19@hotmail.com',
      telefono1:'0995411078',
      telefono2:'2295204',
      pass:'vivian-19',
      idPerfil:'1'
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        alert(JSON.stringify(registroCreado));
      }
    )
  }

}
