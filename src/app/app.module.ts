import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from "./pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [], // Ici vont les services -> contient les méthode pour les requêtes backend
  bootstrap: [AppComponent]
})
export class AppModule {
}
