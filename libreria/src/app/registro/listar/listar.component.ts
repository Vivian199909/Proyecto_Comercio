import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  registros;
  constructor(
    private readonly _loginService: LoginService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        /* console.log(resultadoParametros); */
        /* this.idRegistros= (JSON.stringify(resultadoParametros['params']['id'])).replace(/"/g,''); */
       /*  alert(this.idRegistro); */
        this._loginService
        .metodoGet('http://localhost:1337/registro/')
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.registros=resultadoMetodoGet
        })

      }
    )
  }

  eliminar(idRegistro,idIngreso){
    this._loginService
    .metodoDelete('http://localhost:1337/registro/'+idRegistro)
    .subscribe(
      (resultadoDelete)=>{
        console.log('respuesta de delete registro');
        console.log(resultadoDelete);
        this._loginService
        .metodoDelete('http://localhost:1337/ingreso/'+idIngreso)
        .subscribe(
          (resultadoDelete)=>{
            console.log('respuesta de delete ingreso');
            console.log(resultadoDelete);
            window.location.reload();
          }
        )
      }
    )
  }

}
