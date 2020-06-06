import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { EACCES } from 'constants';

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
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this._loginService.metodoGet('http://localhost:1337/ingreso/')
    .subscribe((resultadoParametro)=>{

      console.log(resultadoParametro);
      var rest=JSON.stringify(resultadoParametro)
      for (let index = 0; index < resultadoParametro.length; index++) {
        
        if (this.usuario===resultadoParametro[index]["usuario"]) {
          if (this.pass===resultadoParametro[index]["clave"]) {
            this.band=true;
            alert("login existoso");

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
