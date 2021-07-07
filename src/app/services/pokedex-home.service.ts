import { Injectable } from '@angular/core';
import { Pokedex, PokedexResponse } from '../pokedex-home/pokedex-home.component';
import axios from 'axios';
import { PokemonEntry, SinglePokedex } from '../pokedex-details/pokedex-details.component';

@Injectable({
  providedIn: 'root'
})
export class PokedexHomeService {

  constructor() { }

  getAllPokedex (): Promise <Pokedex[]> {
    return axios.get<PokedexResponse>('https://pokeapi.co/api/v2/pokedex')
    .then(res => res.data)
    .then(data => data.results);

  }

  getPokedex (name : string): Promise <PokemonEntry[]> {
    return axios.get<SinglePokedex>(`https://pokeapi.co/api/v2/pokedex/${name}`)
    .then(res => res.data.pokemon_entries);
  }
}
