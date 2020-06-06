import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  band=false;
  usuario='';
  pass='';
  constructor(
    private readonly _loginService: LoginService,
    private readonly _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this._loginService.metodoGet('http://localhost:1337/ingreso/')
    .subscribe((resultadoParametro)=>{

      //console.log(resultadoParametro);
      var rest=JSON.stringify(resultadoParametro)
      for(let key in resultadoParametro){
        if (this.usuario===resultadoParametro[key]["usuario"]) {
          if (this.pass===resultadoParametro[key]["clave"]) {
            this.band=true;
            alert("login existoso");
            localStorage
            .setItem('idusuario',
            JSON.stringify({idusuario:resultadoParametro[key]["id"]})
            );
            console.log(resultadoParametro);

            localStorage
            .setItem('idPerfil',
            JSON.stringify({idPerfil:resultadoParametro[key]["idRegistro"]["idPerfil"]})
            );

            if(resultadoParametro[key]["idRegistro"]["idPerfil"]===1){
              this._router.navigate(['libro/listar/']);
            }else{
              this._router.navigate(['registro/listar/']);
            }
          }
        }
      }
    })
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
