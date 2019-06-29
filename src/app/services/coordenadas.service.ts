import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CoordenadasService {

    public latitud: number;
    public longitud: number;

    constructor(private http: HttpClient) { }

}