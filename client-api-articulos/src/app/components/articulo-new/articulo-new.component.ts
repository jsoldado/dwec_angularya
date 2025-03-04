import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulo-new',
  templateUrl: './articulo-new.component.html',
  styleUrls: ['./articulo-new.component.css']
})
export class ArticuloNewComponent implements OnInit {

  articulo:Articulo=new Articulo(0,'',0.0);

  constructor(private _articulosService:ArticulosService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this._articulosService.create(this.articulo).subscribe(
      response=>{
        if(response.status=='success'){
          alert("Producto agregado correctamente");
          this._router.navigate(['/listado-articulos']);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}
