import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ActividadesComponent } from './actividades.component';
import { InputActividadesModule } from '../input-actividades/input-actividades.component.module';

@NgModule({
  declarations: [
    ActividadesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    InputActividadesModule
  ],

  exports: [ActividadesComponent]
})
export class ActividadesModule { }