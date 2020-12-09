import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariologinPageRoutingModule } from './formulariologin-routing.module';

import { FormulariologinPage } from './formulariologin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariologinPageRoutingModule
  ],
  declarations: [FormulariologinPage]
})
export class FormulariologinPageModule {}
