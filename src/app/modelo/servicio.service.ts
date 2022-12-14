import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  dbLib: Libro[];
  libros: Libro[];
  libros$: BehaviorSubject<Libro[]>;

  constructor() {
      this.dbLib = [
        new Libro("Titulo1", "Autor1", "isbn1", new Date()),
        new Libro("Titulo2", "Autor2", "isbn2", new Date()),
        new Libro("Titulo3", "Autor3", "isbn3", new Date()),
      ];
      this.libros = [...this.dbLib];
      this.libros$ = new BehaviorSubject<Libro[]>(this.libros);
  }

  getLibros$(): Observable<Libro[]>{
    return this.libros$.asObservable();
  }

  filtrarTitulo(titulo: String){
    this.libros = this.dbLib.filter(lib => lib.getTitulo() === titulo);
    this.libros$.next([...this.libros]);
  }

}
