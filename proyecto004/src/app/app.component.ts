import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'proyecto004';
  valor1=1;
  valor2=1;
  valor3=1;
  resultado="";

  ngOnInit(): void {
    this.valor1=this.retornarAleatorio();
    this.valor2=this.retornarAleatorio();
    this.valor3=this.retornarAleatorio();
  }


  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }

}
