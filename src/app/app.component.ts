import { Component } from '@angular/core';
import { ServicioService } from './modelo/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: Boolean;

  constructor(public servicio: ServicioService) {
    this.login = false;
  }

  cambiarEstado(estado: Boolean){
    this.login = estado;
  }

}
