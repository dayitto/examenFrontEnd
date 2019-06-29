import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  public latitud: number = 18.847528;
  public longitud: number = -97.104128;

  constructor() { }

  ngOnInit() {
  }

}
