import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerArticuloComponent } from './pages/articulos/vista/ver-articulo/ver-articulo.component';
import { RegistroArticuloComponent } from './pages/articulos/registro/registro-articulo/registro-articulo.component';
import { EditarArticuloComponent } from './pages/articulos/editar/editar-articulo/editar-articulo.component';

const routes: Routes = [
  {path: 'ver-articulo', component:VerArticuloComponent},
  {path: '', redirectTo:'ver-articulo', pathMatch:'full'},
  {path: 'registro-articulo', component:RegistroArticuloComponent},
  {path: 'editar-articulo/:cod_barras', component:EditarArticuloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
