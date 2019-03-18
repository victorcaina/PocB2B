import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaturasListaComponent } from './faturas-lista/faturas-lista.component';

const routes: Routes = [
  {path: '', component: FaturasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturasRoutingModule { }
