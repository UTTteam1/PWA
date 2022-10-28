import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticulosModule } from './pages/articulos/articulos.module';
import { ArticuloService } from 'src/app/services/articulo.service';

@NgModule({
  declarations: [
    AppComponent
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
