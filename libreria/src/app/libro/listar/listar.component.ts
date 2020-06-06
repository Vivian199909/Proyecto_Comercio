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
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        this._loginService
        .metodoGet('http://localhost:1337/producto/')
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.registros=resultadoMetodoGet;
        })
      }
    )
  }

  eliminar(idRegistro){
    this._loginService
    .metodoDelete('http://localhost:1337/producto/'+idRegistro)
    .subscribe(
      (resultadoDelete)=>{
        console.log('respuesta de delete registro');
        console.log(resultadoDelete);
        window.location.reload();
      }
    )
  }

}
