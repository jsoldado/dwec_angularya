import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = "https://ejerciciostutorialesya.com/vue/datos.php";

  constructor(private httclient:HttpClient) { }


  getArticulos(){
    return this.httclient.get<Articulo>(this.url);
  }

}
