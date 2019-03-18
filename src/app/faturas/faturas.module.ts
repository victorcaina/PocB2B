import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaturasRoutingModule } from './faturas-routing.module';
import { FaturasListaComponent } from './faturas-lista/faturas-lista.component';

@NgModule({
  declarations: [FaturasListaComponent],
  imports: [
    CommonModule,
    FaturasRoutingModule
  ]
})
export class FaturasModule { }
