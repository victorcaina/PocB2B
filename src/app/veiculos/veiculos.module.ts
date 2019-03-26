import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosListaComponent } from './veiculos-lista/veiculos-lista.component';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ VeiculosListaComponent, VeiculosFormComponent ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    ReactiveFormsModule
  ]
})
export class VeiculosModule { }
