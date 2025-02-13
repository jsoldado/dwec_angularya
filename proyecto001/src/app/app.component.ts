import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';

  nombre = "Javier";
  edad = 51;
  fumador = false;

  provincias = [
    {id:1, nombre:"Toledo"},
    {id:2, nombre:"Ciudad Real"},
    {id:3, nombre:"Cuenca"},
    {id:4, nombre:"Guadalajara"},
    {id:5, nombre:"Albacete"}
  ];

  esFumador(){
    return this.fumador?"Sí es fumador":"No es fumador";
  }

  contador=0;

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
