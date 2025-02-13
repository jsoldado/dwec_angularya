import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{

  valor=1;

  ngOnInit(){
    this.valor = Math.floor(Math.random()*6)+1;
  }

}
