import { Component } from '@angular/core';
import {ArticulosService} from './services/articulos.service';
import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular-proyecto016';

  articulos=null;
  
  art:Articulo={
    id:0,
    descripcion:'',
    precio:0
  }

  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio.getArticulos().subscribe(result => {
      this.articulos = result["articulos"];
      console.log(this.articulos);
    });
    
    
  }

  alta() {
    this.articulosServicio.create(this.art).subscribe(datos => {
      if (datos['status']=='success') {
        console.log(datos);
        alert(datos['articulo'].descripcion);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:any) {
    this.articulosServicio.delete(codigo).subscribe(datos => {
      console.log(datos);
      if (datos['status']=='success') {
        alert(datos['articulo'].descripcion);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    //alert(this.art.id + '\n' + this.art);

    this.articulosServicio.update(this.art.id,this.art).subscribe(datos => {
      if (datos['status']=='success') {
        console.log(datos);
        //alert(datos['articulo'].descripcion);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo:any) {
    this.articulosServicio.getArticulo(codigo).subscribe(result => this.art = result['articulo']);
  }

  hayRegistros() {
    return true;
  } 

}
