import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GraficaComponent } from './grafica.component';

@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    Ng2GoogleChartsModule
  ],

  exports: [GraficaComponent]
})
export class GraficaModule { }