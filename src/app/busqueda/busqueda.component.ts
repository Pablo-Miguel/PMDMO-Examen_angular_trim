import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../modelo/servicio.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

}
