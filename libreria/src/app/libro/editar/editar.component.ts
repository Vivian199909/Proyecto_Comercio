import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id='';
  nombreProducto='';
  numPaginas:number;
  tamanio='';
  precio:number;
  stock:number;
  constructor(
    private readonly _loginService: LoginService,
    private readonly _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        /* console.log(resultadoParametros); */
        this.id= (JSON.stringify(resultadoParametros['params']['id'])).replace(/"/g,'');
       /*  alert(this.idRegistro); */
        this._loginService
        .metodoGet('http://localhost:1337/producto/'+ this.id)
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.nombreProducto=resultadoMetodoGet['nombreProducto'];
          this.numPaginas=resultadoMetodoGet['numPaginas'];
          this.tamanio=resultadoMetodoGet['tamanio'];
          this.precio=resultadoMetodoGet['precio'];
          this.stock=resultadoMetodoGet['stock'];
        })

      }
    )
  }

  ingresar(){
    this._loginService.metodoPut('http://localhost:1337/producto/'+ this.id,
    {
      nombreProducto:this.nombreProducto,
      numPaginas:this.numPaginas,
      tamanio:this.tamanio,
      precio:this.precio,
      stock:this.stock
    }).subscribe(
      (result)=>{
        console.log(result);
        this._router.navigate(['libro/listar/']);
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
