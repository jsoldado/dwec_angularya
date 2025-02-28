import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'listadopeliculas', component: ListadoPeliculasComponent},
    {path:'acercade', component: AcercadeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
