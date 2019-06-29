import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './clima.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ClimaComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    IonicModule
  ],

  exports: [ClimaComponent]
})
export class ClimaModule { }