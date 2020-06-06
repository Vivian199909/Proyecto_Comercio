import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nombreProducto='';
  numPaginas:number;
  tamanio='';
  precio:number;
  stock:number;
  constructor(
    private readonly _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this._loginService.metodoPost('http://localhost:1337/producto',
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
