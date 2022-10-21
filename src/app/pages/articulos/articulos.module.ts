import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroArticuloComponent } from './registro/registro-articulo/registro-articulo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerArticuloComponent } from './vista/ver-articulo/ver-articulo.component';


@NgModule({
  declarations: [
    RegistroArticuloComponent,
    VerArticuloComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistroArticuloComponent,
    VerArticuloComponent
  ]
})
export class ArticulosModule { }
