import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        console.log(resultadoParametros);
        this.idRegistro= (JSON.stringify(resultadoParametros['params']['id'])).replace('/"/g','');
        alert(this.idRegistro);
        this._loginService
        .metodoGet('http://localhost:1337/registro/'+ this.idRegistro)
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
        })
      }
    )

  }
  ingresar(){
    this._loginService.editarRegistro({
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
      }
    )
    this._loginService.editarCredenciales({
      usuario:this.usuario,
      clave:this.pass,
      idRegitro: this.idRegistro
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        alert(JSON.stringify(registroCreado));
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
