import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticulosModule } from './pages/articulos/articulos.module';
import { ArticuloService } from 'src/app/services/articulo.service';
import { authInterceptorProviders } from './services/jwt-interceptor.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticulosModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
