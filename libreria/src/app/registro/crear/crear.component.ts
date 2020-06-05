import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  cedula='';
  nombres='';
  apellidos='';
  direccion='';
  correo='';
  telefono1='';
  telefono2='';
  usuario='';
  pass='';
  passr='';
  idPerfil='';
  idRegistro='';
  constructor(
    private readonly _loginService: LoginService,
  ) { }

  ngOnInit(): void {

  }
  ingresar(){
    this._loginService.crearRegistro({
      cedula:this.cedula,
      nombres:this.nombres,
      apellidos:this.apellidos ,
      direccion:this.direccion,
      correo:this.correo,
      telefono1:this.telefono1,
      telefono2:this.telefono2,
      //pass:'vivian-19',
      idPerfil:1
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        alert(JSON.stringify(registroCreado['id']));
        
        this.idRegistro=JSON.stringify(registroCreado['id']);
        alert(this.idRegistro)
        this._loginService.crearCredenciales({
          usuario:this.usuario,
          clave:this.pass,
          idRegistro: this.idRegistro+''
        }).subscribe(
          (registroCreado)=>{
            console.log('registroCreado');
            console.log(registroCreado);
            alert(JSON.stringify(registroCreado));
          }
        )
      }
    )
    
  }

  obtenerFormulario(formulario) {
    console.log(formulario);
    /* alert(
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.pass.value
    ); */
  }

}
