import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokedexDetailsComponent } from './pokedex-details/pokedex-details.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeFrikiComponent } from './poke-friki/poke-friki.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexHomeComponent,
    PokedexDetailsComponent,
    PokemonsComponent,
    PokemonDetailsComponent,
    PokeFrikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
