import { Injectable } from '@angular/core';
import { Tarjeta } from '../model/Tarjeta.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class TarjetaService {
  private urlEndPoint:string='http://localhost:8190/api/tarjetas';

private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getTarjetaes(): Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(this.urlEndPoint)
  }

  create(tarjeta: Tarjeta) : Observable<Tarjeta>{
    return this.http.post<Tarjeta>(this.urlEndPoint,tarjeta,{headers: this.httpHeaders})
  }

  getTarjeta(id: number) : Observable<Tarjeta>{
    return this.http.get<Tarjeta>(`${this.urlEndPoint}/${id}`)
  }

  update(tarjeta: Tarjeta) : Observable<Tarjeta>{
    return this.http.put<Tarjeta>(`${this.urlEndPoint}/${tarjeta.id}`,tarjeta,{headers: this.httpHeaders})
  }

  delete(id: number) : Observable<Tarjeta>{
    return this.http.delete<Tarjeta>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}