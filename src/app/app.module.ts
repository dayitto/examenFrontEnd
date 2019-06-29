import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActividadService } from './services/actividad.service';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaService } from './services/tarjeta.service';
import { ClimaService } from './services/clima.service';
import { CoordenadasService } from './services/coordenadas.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UsuarioService } from './services/usuario.service';
import { AuthGuardService } from './services/authguard.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ActividadService,
    TarjetaService,
    ClimaService,
    CoordenadasService,
    Geolocation,
    UsuarioService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
