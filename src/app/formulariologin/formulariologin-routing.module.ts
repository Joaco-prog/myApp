import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariologinPage } from './formulariologin.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariologinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariologinPageRoutingModule {}
