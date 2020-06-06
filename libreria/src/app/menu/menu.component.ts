import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  arregloMenu=[{nombre:'INICIO',url:''},{nombre:'CONTACTO',url:''},{nombre:'INICIAR SESIÓN',url:'/login'},{nombre:'REGISTRARSE',url:'/registro/crear'}]
  constructor() { }

  ngOnInit(): void {
    const valorLocal = JSON
    .parse(localStorage.getItem('idusuario'));
    if(valorLocal.idusuario){
      const valorLocal1 = JSON.parse(localStorage.getItem('idPerfil'));
      if(valorLocal1.idPerfil===1){
        this.arregloMenu=[{nombre:'INICIO',url:''},{nombre:'LIBROS',url:'/libro/listar'},{nombre:'CARRITO',url:'/carrito'},{nombre:'CERRAR SESIÓN',url:'/logout'}]
      }else{
        this.arregloMenu=[{nombre:'INICIO',url:''},{nombre:'LIBROS',url:'/libro/listar'},{nombre:'USUARIOS',url:'/registro/listar'},{nombre:'CERRAR SESIÓN',url:'/logout'},{nombre:'REGISTRAR',url:'/registro/crear'}]
      }
    }
  }

  logout(){
    localStorage.removeItem('idusuario');
    localStorage.removeItem('idPerfil');
  }

}
