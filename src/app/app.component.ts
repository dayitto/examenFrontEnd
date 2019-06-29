import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CoordenadasService } from './services/coordenadas.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'list'
    },
    {
      title: 'Mapa',
      url: '/mapa',
      icon: 'map'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private coordenadasService: CoordenadasService,
    private usuarioService: UsuarioService
  ) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordenadasService.latitud = resp.coords.latitude;
      this.coordenadasService.longitud = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
