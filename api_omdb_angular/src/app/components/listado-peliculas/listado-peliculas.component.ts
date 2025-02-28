import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  standalone: false,
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{

  constructor(private servicePeliculas:PeliculasService) { }


  ngOnInit(): void {
    this.servicePeliculas.buscarPelicula('batman').subscribe((data)=>{
      console.log(data.Search);
      console.log(data.Search[0].Poster);
      console.log(data.totalResults);
    });
  }



}
