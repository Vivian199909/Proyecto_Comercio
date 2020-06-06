import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  idIngreso='';
  constructor(
    private readonly _loginService: LoginService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        /* console.log(resultadoParametros); */
        this.idRegistro= (JSON.stringify(resultadoParametros['params']['id'])).replace(/"/g,'');
       /*  alert(this.idRegistro); */
        this._loginService
        .metodoGet('http://localhost:1337/registro/'+ this.idRegistro)
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.cedula=resultadoMetodoGet['cedula'];
          this.nombres=resultadoMetodoGet['nombres'];
          this.apellidos=resultadoMetodoGet['apellidos'];
          this.direccion=resultadoMetodoGet['direccion'];
          this.correo=resultadoMetodoGet['correo'];
          this.telefono1=resultadoMetodoGet['telefono1'];
          this.telefono2=resultadoMetodoGet['telefono2'];
          this.idRegistro=resultadoMetodoGet['id'];
          this.usuario=resultadoMetodoGet['ingresos']['0']['usuario'];
          this.pass=resultadoMetodoGet['ingresos']['0']['clave'];
          this.idIngreso=resultadoMetodoGet['ingresos']['0']['id'];
        })

      }
    )

  }
  ingresar(){
    this._loginService.metodoPut('http://localhost:1337/registro/'+ this.idRegistro,{
      cedula:this.cedula,
      nombres:this.nombres,
      apellidos:this.apellidos ,
      direccion:this.direccion,
      correo:this.correo,
      telefono1:this.telefono1,
      telefono2:this.telefono2,
      usuario:this.usuario,
      clave:this.pass,
      idPerfil:1
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        //alert(JSON.stringify(registroCreado['id']));

        this.idRegistro=JSON.stringify(registroCreado['id']);
      }
    )
    this._loginService.metodoPut('http://localhost:1337/ingreso/'+ this.idIngreso,{
      usuario:this.usuario,
      clave:this.pass,
      idRegitro: this.idRegistro
    }).subscribe(
      (registroCreado)=>{
        console.log('registroCreado');
        console.log(registroCreado);
        //alert(JSON.stringify(registroCreado));
        this._router.navigate(['registro/listar']);
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
