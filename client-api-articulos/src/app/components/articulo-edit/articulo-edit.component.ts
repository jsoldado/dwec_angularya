import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css']
})
export class ArticuloEditComponent implements OnInit {

  articulo:Articulo=new Articulo(0,'',0.0);

  constructor(private _articulosService:ArticulosService,
              private _route:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        let id = params['id'];
        //alert("id="+id);
        this._articulosService.getArticulo(id).subscribe(
            response=>{
              if(response.status=='success'){
                this.articulo=response.articulo;
              }
            },
            error=>{
              console.log(error);
            }
        );
        
      }
    )
  }

  editar(){
    this._articulosService.update(this.articulo.id,this.articulo).subscribe(
      response=>{
        console.log(response);
        if(response.status=='success'){
          alert("Artículo modificado correctamente");
          this._router.navigate(['/listado-articulos']);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }
}
