import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoArticulosComponent } from './components/listado-articulos/listado-articulos.component';
//import {  HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListadoArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
