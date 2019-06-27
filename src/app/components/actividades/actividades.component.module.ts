import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ActividadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [ActividadesComponent]
})
export class ActividadesModule { }