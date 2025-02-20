import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: false,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {

  @Input() contador:number = 10;
  @Output() cuentafinaliza = new EventEmitter();

  temporizador:any;

  start(){
    this.temporizador = setInterval(()=>{
      this.contador--;
      if(this.contador == 0) {
        clearInterval(this.temporizador);
        this.cuentafinaliza.emit();
      }
    }, 1000);
  }

}
