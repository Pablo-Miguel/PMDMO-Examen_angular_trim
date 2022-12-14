import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() login: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAspecto(estado: Boolean){
    this.login.emit(estado);
  }

}
