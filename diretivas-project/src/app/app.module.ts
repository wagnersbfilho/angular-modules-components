// IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//DECLARATIONS (componentes e diretivas)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './diretivas-estruturais/card.component';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import {ModuloComumModule} from "./modulo-comum/modulo-comum.module";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DiretivasAtributoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuloComumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
