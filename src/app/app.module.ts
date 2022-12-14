import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LibroCompComponent } from './libro-comp/libro-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BusquedaComponent,
    LibroCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
