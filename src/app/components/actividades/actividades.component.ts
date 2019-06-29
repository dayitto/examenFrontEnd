import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../model/actividad.model';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { InputActividadesComponent } from '../input-actividades/input-actividades.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
})
export class ActividadesComponent implements OnInit {

  actividades: Array<Actividad> = [];

  constructor(
    private actividadService: ActividadService,
    public modalController: ModalController,
    public alertController: AlertController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.getActividades();
  }
  
  getActividades = ()=> this.actividadService.getActividades().subscribe( (actividades: Actividad[]) => this.actividades = actividades );

  async presentAlertConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: '<strong>Seguro que deseas eliminar?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => this.actividadService.delete(id).subscribe(()=> this.getActividades())
        }
      ]
    });

    await alert.present();
  }

  async presentPopover(actividad?: Actividad) {
    let actividadEdit = new Actividad();
    if(actividad){
      actividadEdit = actividad;
    }
    const popover = await this.popoverController.create({
      component: InputActividadesComponent,
      componentProps: {
        'actividad': actividadEdit
      },
      translucent: true
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.getActividades();
      }
    });

    return await popover.present();
  }

  arrayVacio = ()=> this.actividades.length === 0;

}
