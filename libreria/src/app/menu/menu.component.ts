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
  }

}
