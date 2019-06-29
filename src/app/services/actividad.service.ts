import { Injectable } from '@angular/core';
import { Actividad } from '../model/actividad.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActividadService {
  private urlEndPoint:string='http://localhost:8190/api/actividades';

private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getActividades = (): Observable<Actividad[]> => this.http.get<Actividad[]>(this.urlEndPoint);

  save = (actividad: Actividad) : Observable<Actividad> => actividad.id === undefined ? this.http.post<Actividad>(this.urlEndPoint,actividad,{headers: this.httpHeaders}) : this.http.put<Actividad>(`${this.urlEndPoint}/${actividad.id}`,actividad,{headers: this.httpHeaders});

  getActividad = (id: number) : Observable<Actividad> => this.http.get<Actividad>(`${this.urlEndPoint}/${id}`);

  delete = (id: number) : Observable<Actividad> => this.http.delete<Actividad>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
}