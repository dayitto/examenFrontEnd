import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TarjetasComponent } from './tarjetas.component';
import { InputTarjetasModule } from '../input-tarjetas/input-tarjetas.component.module';

@NgModule({
  declarations: [
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    InputTarjetasModule
  ],

  exports: [TarjetasComponent]
})
export class TarjetasModule { }