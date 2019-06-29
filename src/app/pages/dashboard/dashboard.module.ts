import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';
import { ActividadesModule } from '../../components/actividades/actividades.component.module';
import { TarjetasModule } from 'src/app/components/tarjetas/tarjetas.component.module';
import { GraficaModule } from 'src/app/components/grafica/grafica.component.module';
import { ClimaModule } from 'src/app/components/clima/clima.component.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ActividadesModule,
    TarjetasModule,
    GraficaModule,
    ClimaModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
