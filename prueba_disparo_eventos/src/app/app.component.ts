import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba_disparo_eventos';

  mousemoveApp(evt:any){
    console.log('mousemoveApp', evt.clientX, evt.clientY);
  }

  
}
