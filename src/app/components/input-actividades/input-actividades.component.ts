import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Actividad } from 'src/app/model/actividad.model';
import { NavParams, PopoverController } from '@ionic/angular';
import { ActividadService } from './../../services/actividad.service';

@Component({
  selector: 'app-input-actividades',
  templateUrl: './input-actividades.component.html',
  styleUrls: ['./input-actividades.component.scss'],
})
export class InputActividadesComponent implements OnInit {

  @Input() actividad: Actividad;

  constructor(
    public navParams: NavParams,
    public actividadService: ActividadService,
    private popoverController: PopoverController) {;
  }

  ngOnInit() {}

  logForm = () => this.actividadService.save(this.actividad).subscribe(() => this.popoverController.dismiss());

}
