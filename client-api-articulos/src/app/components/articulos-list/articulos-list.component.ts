import { Component, OnInit, ViewChild } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css']
})
export class ArticulosListComponent implements OnInit {

  articulos!:Articulo[];
  columnas: string[] = ['id', 'descripcion', 'precio', 'editar', 'borrar'];

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  constructor(private _articuloService:ArticulosService) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos(){
    this._articuloService.getArticulos().subscribe(
      response => {
        if(response.status=='success'){
          this.articulos=response.articulos;
          //this.tabla1.renderRows();
          //console.log(this.articulos);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  borrarFila(articulo:Articulo){
    if (confirm("Realmente quiere borrarlo?")) {
      //this.articulos.splice(fila, 1);
      this._articuloService.delete(articulo.id).subscribe(
        response=>{
          //console.log(response);
          if(response.status=='success'){
            //
          }
          this.getArticulos();
        },
        error=>{
          console.log(error);
        }
      )
      
    }
  }



}
