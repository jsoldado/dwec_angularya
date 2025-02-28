import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { IPelicula } from '../../models/ipelicula';

@Component({
  selector: 'app-listado-peliculas',
  standalone: false,
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{

  search:string = '';
  tipo:string = '';
  peliculas:IPelicula[] = [];

  constructor(private servicePeliculas:PeliculasService) { }

  ngOnInit(): void {
    //
  }

  buscar(){
    this.servicePeliculas.buscarPelicula(this.search,this.tipo).subscribe((data)=>{
      console.log(data.Search);
      //console.log(data.Search[0].Poster);
      console.log(data.totalResults);
      this.peliculas = data.Search;
    });
  }


}
