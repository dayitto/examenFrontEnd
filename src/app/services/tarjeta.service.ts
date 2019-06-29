import { Injectable } from '@angular/core';
import { Tarjeta } from '../model/Tarjeta.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class TarjetaService {
  private urlEndPoint:string='http://localhost:8190/api/tarjetas';

private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getTarjetas = (): Observable<Tarjeta[]> => this.http.get<Tarjeta[]>(this.urlEndPoint);

  save = (tarjeta: Tarjeta) : Observable<Tarjeta> => tarjeta.id === undefined ? this.http.post<Tarjeta>(this.urlEndPoint,tarjeta,{headers: this.httpHeaders}) : this.http.put<Tarjeta>(`${this.urlEndPoint}/${tarjeta.id}`,tarjeta,{headers: this.httpHeaders});

  getTarjeta = (id: number) : Observable<Tarjeta> => this.http.get<Tarjeta>(`${this.urlEndPoint}/${id}`);

  delete = (id: number) : Observable<Tarjeta> => this.http.delete<Tarjeta>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
}