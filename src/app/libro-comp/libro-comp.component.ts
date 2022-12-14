import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../modelo/libro';

@Component({
  selector: 'app-libro-comp',
  templateUrl: './libro-comp.component.html',
  styleUrls: ['./libro-comp.component.css']
})
export class LibroCompComponent implements OnInit {

  @Input() libro!: Libro;

  constructor() { }

  ngOnInit(): void {
  }

}
