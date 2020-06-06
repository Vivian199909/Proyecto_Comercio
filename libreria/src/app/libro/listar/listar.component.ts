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
  idOrden;
  idPerfil;
  pendiente;
  f = new Date();
  idusuario;

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
        });
        const valorLocal = JSON.parse(localStorage.getItem('idPerfil'));
        if(valorLocal.idPerfil){
          this.idPerfil=valorLocal.idPerfil;
        }
        const valorLocal1 = JSON.parse(localStorage.getItem('idusuario'));
        if(valorLocal1.idusuario){
          this.idusuario=valorLocal1.idusuario;
        }
      }
    )
    this._activatedRoute.paramMap.subscribe(
      (resultadoParametros)=>{
        /* console.log(resultadoParametros); */

       /*  alert(this.idRegistro); */
        /* this._loginService
        .metodoGet('http://localhost:1337/producto/'+ this.id)
        .subscribe((resultadoMetodoGet)=>{
          console.log('respuesta de get');
          console.log(resultadoMetodoGet);
          this.nombreProducto=resultadoMetodoGet['nombreProducto'];
          this.numPaginas=resultadoMetodoGet['numPaginas'];
          this.tamanio=resultadoMetodoGet['tamanio'];
          this.precio=resultadoMetodoGet['precio'];
          this.stock=resultadoMetodoGet['stock'];
        }) */

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

  agregaCarrito(id){
    this._loginService.metodoGet('http://localhost:1337/orden?comprado=false')
    .subscribe((resultadoMetodoGet)=>{
      console.log('respuesta de get');
      console.log(resultadoMetodoGet);
      if(resultadoMetodoGet){
        this.pendiente=true;
        this.idOrden=resultadoMetodoGet[0].id;
      }
    });
    if(this.pendiente){
      this._loginService.metodoPost('http://localhost:1337/orden',{
        fechaOrden: (this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear()),
        comprado:0,
        idIngreso:this.idusuario
      }).subscribe(
        (result)=>{
          console.log(result);
          this.idOrden=result[0].id;
        }
      )
    }
    this._loginService.metodoPost('http://localhost:1337/detalleOrden?idOrden='+this.idOrden,
      {
        cantidad:1,
        idOrden:this.idOrden,
        idProducto:id
      }).subscribe(
        (result)=>{
          console.log(result);
          alert("Libro Agregado");
        }
      )

  }

}
