import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private  router:  Router
  ) { }

  ngOnInit() {
  }

  login(form){
    if(form._directives[0].viewModel === this.usuarioService.usuario && form._directives[1].viewModel === this.usuarioService.pass){
      this.usuarioService.logged = true;
      this.router.navigateByUrl('dashboard');
    }
  }

}
