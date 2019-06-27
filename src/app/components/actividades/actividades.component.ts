import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../model/actividad.model';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
})
export class ActividadesComponent implements OnInit {

  constructor(
    private actividadService: ActividadService
  ) { }

  actividades: Actividad[];

  ngOnInit() {
    console.log("aaaa");
    this.actividadService.getActividades().subscribe(
      (actividades: Actividad[]) =>{
        this.actividades=actividades
      }
    );
  }

}
