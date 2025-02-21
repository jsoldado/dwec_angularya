import { Component, Input } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-listado-articulos',
  standalone: false,
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css'
})
export class ListadoArticulosComponent {

  @Input() articulos: Articulo[] = [];

  constructor(private servicioarticulos:ArticulosService) {
    //this.articulos = [{"codigo":1,"descripcion":"papas","precio":12.33},{"codigo":2,"descripcion":"manzanas","precio":54},{"codigo":3,"descripcion":"sandia","precio":31}];
    this.servicioarticulos.getArticulos().subscribe((data:any) => {
      this.articulos = data;
    });
   }


  }
