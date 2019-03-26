import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosListaComponent } from './veiculos-lista/veiculos-lista.component';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';

const routes: Routes = [
  {path: '', component: VeiculosListaComponent},
  {path: 'novo', component: VeiculosFormComponent},
  {path: 'editar/:id', component: VeiculosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
