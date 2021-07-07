import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeFrikiComponent } from './poke-friki/poke-friki.component';
import { PokedexDetailsComponent } from './pokedex-details/pokedex-details.component';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {path: '', component: PokeFrikiComponent},
  {path : 'pokedex', component : PokedexHomeComponent},
  {path : 'pokedex/:entry', component : PokedexDetailsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemons/:entry', component : PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
