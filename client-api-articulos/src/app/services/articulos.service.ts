import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='https://apiproyecto016.iesruizgijon.es/api/articulos'; // url de la API
  //url='http://api-proyecto016.com.devel/api/articulos'; // url de la API
  //url='http://localhost/api-proyecto016/public/api/articulos';

  constructor(private http: HttpClient) { }

  getArticulos():Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  create(articulo:Articulo):Observable<any> {
    let json = JSON.stringify(articulo);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<any>(`${this.url}`, params,{headers: headers});
  }

  delete(codigo:number):Observable<any> {
    return this.http.delete<any>(`${this.url}/${codigo}`);
  }

  getArticulo(codigo:number):Observable<any> {
    return this.http.get<any>(`${this.url}/${codigo}`);
  }

  update(codigo:number,articulo:Articulo):Observable<any> {
    let json = JSON.stringify(articulo);
    let params = "json="+json;
    //alert(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.put<any>(`${this.url}/${codigo}`, params, {headers: headers});
  }
}
