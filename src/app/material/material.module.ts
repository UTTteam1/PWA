import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class MaterialModule { }