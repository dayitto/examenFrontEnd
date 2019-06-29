import { Component, OnInit, Input } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { NavParams, PopoverController } from '@ionic/angular';
import { Tarjeta } from 'src/app/model/tarjeta.model';

@Component({
  selector: 'app-input-tarjetas',
  templateUrl: './input-tarjetas.component.html',
  styleUrls: ['./input-tarjetas.component.scss'],
})
export class InputTarjetasComponent implements OnInit {

  @Input() tarjeta: Tarjeta;

  constructor(
    public navParams: NavParams,
    public tarjetaService: TarjetaService,
    private popoverController: PopoverController) {;
  }

  ngOnInit() {}

  logForm = () => this.tarjetaService.save(this.tarjeta).subscribe(() => this.popoverController.dismiss());

}
