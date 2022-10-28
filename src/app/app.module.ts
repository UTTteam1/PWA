import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticulosModule } from './pages/articulos/articulos.module';
import { ArticuloService } from 'src/app/services/articulo.service';
import { BarChartComponent } from './pages/chart/bar-chart/bar-chart.component';
import { LineChartComponent } from './pages/chart/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticulosModule,
    HttpClientModule
    
  ],
  providers: [ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
