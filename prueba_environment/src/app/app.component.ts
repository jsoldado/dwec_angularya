import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'prueba_environment';
  produccion = false;
  apiUrl = '-';

  ngOnInit(): void {
    this.produccion = environment.production;
    this.apiUrl = environment.apiUrl;
  }

}
