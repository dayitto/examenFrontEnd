import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { Clima } from 'src/app/model/clima.model';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {

  climas: Array<any> = [];
  dias: Array<string> = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  ciudad: string;

  constructor(
    private climaService: ClimaService
  ) { }

  ngOnInit() {
    this.climaService.getListaClimas().subscribe((clima: Clima) => {
      for (let i = 0; i < clima.list.length; i++) {
        if ((i + 3) % 8 === 0) {
          clima.list[i].dia = this.dias[new Date(clima.list[i].dt_txt).getDay()];
          this.climas.push(clima.list[i]);
        }
        this.ciudad = clima.city.name;
      }
    });
  }
}
