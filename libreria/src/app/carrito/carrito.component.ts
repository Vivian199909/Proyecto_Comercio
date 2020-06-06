import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  registros;
  total=0;
  id;

  constructor(
    private readonly _loginService: LoginService,
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        this._loginService
        .metodoGet('http://localhost:1337/orden?comprado=false')
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.id=resultadoMetodoGet[0].id;
          for (let key in resultadoMetodoGet[0].detallesOrden) {
            console.log(resultadoMetodoGet[0].detallesOrden[key].idProducto);
            this._loginService.metodoGet('http://localhost:1337/producto/'+resultadoMetodoGet[0].detallesOrden[key].idProducto)
            .subscribe((resultadoMetodoGet1)=>{
              console.log(resultadoMetodoGet1);
              resultadoMetodoGet[0].detallesOrden[key].titulo=resultadoMetodoGet1['nombreProducto'];
              resultadoMetodoGet[0].detallesOrden[key].precio=resultadoMetodoGet1['precio'];
              this.total+=(resultadoMetodoGet[0].detallesOrden[key]['cantidad']*resultadoMetodoGet1['precio']);
            })
            console.log('prueba');
            console.log(resultadoMetodoGet[0].detallesOrden[key]['cantidad']);

            //this.total+=(resultadoMetodoGet[0].detallesOrden[key].precio*resultadoMetodoGet[0].detallesOrden[key].cantidad)
          }
          this.registros=resultadoMetodoGet;
          console.log(this.registros);

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

  comprar(){
    this._loginService
    .metodoPut('http://localhost:1337/orden/'+this.id,{
      comprado:true
    })
  }

}
