import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTarjetasComponent } from './input-tarjetas.component';

@NgModule({
  declarations: [
    InputTarjetasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [InputTarjetasComponent],
  entryComponents: [InputTarjetasComponent],
})
export class InputTarjetasModule { }