import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Clima } from '../model/clima.model';
import { CoordenadasService } from './coordenadas.service';

@Injectable()
export class ClimaService {

  private urlEndPoint:string;
  
  constructor(
    private http:HttpClient,
    private coordenadasService: CoordenadasService
    ) { 
      this.urlEndPoint = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + this.coordenadasService.latitud + '&lon=' + this.coordenadasService.longitud + '&appid=c66f69c01f66fc4fa8b220c47e3a51c3';
    }

  getListaClimas = (): Observable<Clima> => this.http.get<Clima>(this.urlEndPoint);

}