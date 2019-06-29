import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

    usuario: string = "admin";
    pass: string = "1234";
    logged: boolean = false;

  constructor() { }
}