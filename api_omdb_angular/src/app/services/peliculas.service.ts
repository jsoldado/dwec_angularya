import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../models/iresponse';

const URL="https://www.omdbapi.com/";
const API_KEY="9f072b13";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient:HttpClient) { }

  public buscarPelicula(pelicula:string){
    return this.httpClient.get<IResponse>(`${URL}?apikey=${API_KEY}&s=${pelicula}`);
  }
}
