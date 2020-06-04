import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arreglofrases=['LOS LIBROS TE CREAN Y TE CONSTRUYEN NO SOLO TE TRANSFORMA',
'LEER NO ES MODA ES UN GUSTO QUE APASIONA',
'SI SALES ILESO DE UN LIBRO ES QUE NUNCA HAS ENTRADO']
  constructor() { }

  ngOnInit(): void {
  }

}
