import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { Tarjeta } from 'src/app/model/tarjeta.model';
import { InputTarjetasComponent } from '../input-tarjetas/input-tarjetas.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  tarjetas: Array<Tarjeta> = [];
  tipos: Array<string> = ['Visa', 'MasterCard', 'AmericanExpress'];
  
  constructor(
    private tarjetaService: TarjetaService,
    public modalController: ModalController,
    public alertController: AlertController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.getTarjetas();
  }

  getTarjetas = ()=> this.tarjetaService.getTarjetas().subscribe( (tarjetas: Tarjeta[]) => this.tarjetas = tarjetas);

  async presentAlertConfirm2(id: number) {
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
          handler: () => this.tarjetaService.delete(id).subscribe(()=> this.getTarjetas())
        }
      ]
    });

    await alert.present();
  }

  async presentPopover(tarjeta?: Tarjeta) {
    let tarjetaEdit = new Tarjeta();
    if(tarjeta){
      tarjetaEdit = tarjeta;
    }
    const popover = await this.popoverController.create({
      component: InputTarjetasComponent,
      componentProps: {
        'tarjeta': tarjetaEdit
      },
      translucent: true
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.getTarjetas();
      }
    });

    return await popover.present();
  }

  arrayVacio = ()=> this.tarjetas.length === 0;

}
