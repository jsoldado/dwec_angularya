import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosListComponent } from './components/articulos-list/articulos-list.component';
import { ArticuloNewComponent } from './components/articulo-new/articulo-new.component';
import { ArticuloEditComponent } from './components/articulo-edit/articulo-edit.component';


const routes: Routes = [
  {path:'listado-articulos',component:ArticulosListComponent},
  {path:'crear-articulo',component: ArticuloNewComponent},
  {path:'editar-articulo/:id',component:ArticuloEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
