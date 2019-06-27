import { Injectable } from '@angular/core';
import { Actividad } from '../model/actividad.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActividadService {
  private urlEndPoint:string='http://localhost:8190/api/actividades';

private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getActividades(): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.urlEndPoint)
  }

  create(actividad: Actividad) : Observable<Actividad>{
    return this.http.post<Actividad>(this.urlEndPoint,actividad,{headers: this.httpHeaders})
  }

  getActividad(id: number) : Observable<Actividad>{
    return this.http.get<Actividad>(`${this.urlEndPoint}/${id}`)
  }

  update(actividad: Actividad) : Observable<Actividad>{
    return this.http.put<Actividad>(`${this.urlEndPoint}/${actividad.id}`,actividad,{headers: this.httpHeaders})
  }

  delete(id: number) : Observable<Actividad>{
    return this.http.delete<Actividad>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}