import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponse } from '../pokemons/pokemons.component';
import axios from 'axios';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getAllPokemons (): Promise <PokemonResponse> {
    return axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.data);
  }

  getNextPokemonList(url:string) {
    return axios.get<PokemonResponse>(url)
      .then(res => res.data);
  }

  getPrevPokemonList(url:string) {
    return axios.get<PokemonResponse>(url)
      .then(res => res.data);
  }
}
