import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerArticuloComponent } from './pages/articulos/vista/ver-articulo/ver-articulo.component';
import { RegistroArticuloComponent } from './pages/articulos/registro/registro-articulo/registro-articulo.component';
import { EditarArticuloComponent } from './pages/articulos/editar/editar-articulo/editar-articulo.component';
import { BarChartComponent } from './pages/chart/bar-chart/bar-chart.component';
import { LineChartComponent } from './pages/chart/line-chart/line-chart.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGuardGuard } from './services/user-guard.guard';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {path: 'ver-articulo', component:VerArticuloComponent, canActivate:[UserGuardGuard]},
  {path: 'registro-articulo', component:RegistroArticuloComponent, canActivate:[UserGuardGuard]},
  {path: 'editar-articulo/:cod_barras', component:EditarArticuloComponent, canActivate:[UserGuardGuard]},
  {path: 'ventas', component:BarChartComponent, canActivate:[UserGuardGuard]},
  {path: 'ventas1', component:LineChartComponent, canActivate:[UserGuardGuard]},
  
  //login
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent, canActivate:[UserGuardGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
