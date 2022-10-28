import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from 'src/app/material/material.module';
import { RegistroArticuloComponent } from './registro/registro-articulo/registro-articulo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerArticuloComponent } from './vista/ver-articulo/ver-articulo.component';
import { EditarArticuloComponent } from './editar/editar-articulo/editar-articulo.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegistroArticuloComponent,
    VerArticuloComponent,
    EditarArticuloComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    RegistroArticuloComponent,
    VerArticuloComponent
  ]
})
export class ArticulosModule { }
