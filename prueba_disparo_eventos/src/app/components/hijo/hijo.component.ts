import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() mimousemove = new EventEmitter();

  mousemoveDiv(evt:any){
    //console.log('mousemoveDiv', evt.clientX, evt.clientY);
    this.mimousemove.emit(evt);
  }

}
