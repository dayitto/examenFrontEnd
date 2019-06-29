import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputActividadesComponent } from './input-actividades.component';

@NgModule({
  declarations: [
    InputActividadesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [InputActividadesComponent],
  entryComponents: [InputActividadesComponent],
})
export class InputActividadesModule { }