import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import axios from 'axios';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemonIndex: number = 20;
  pokemonNext: string = '';
  pokemonBack: string = '';
  

  constructor(private pokemonService : PokemonsService) { 
    this.pokemonService.getAllPokemons().then(res => {
      this.pokemonList = res.results
      this.pokemonNext = res.next
      this.pokemonBack = res.previous
    })
    this.infoPokemon(this.pokemonIndex);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  infoPokemon(index: number) {
    let routePokemonList : string[] = [];
    for(let i = index - 19; i <= index; i++) {
      routePokemonList.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }

    const details = routePokemonList.map(route => axios.get(route));

    Promise.all(details)
      .then(res => res.map(r => r.data))
      .then(data => {
        this.pokemonList.forEach((pokemon, index) => {
          pokemon.image = data[index].sprites.other.dream_world.front_default;
        })
      })
    }


  next() : void {
    this.pokemonService.getNextPokemonList(this.pokemonNext)
    .then(res => {
      this.pokemonList = res.results
      this.pokemonNext = res.next
      this.pokemonBack = res.previous
      this.pokemonIndex += 20;
      this.infoPokemon(this.pokemonIndex);
    })
  }

  back() : void {
    this.pokemonService.getPrevPokemonList(this.pokemonNext)
    .then(res => {
      this.pokemonList = res.results
      this.pokemonNext = res.next
      this.pokemonBack = res.previous
      this.pokemonIndex -= 20;
      this.infoPokemon(this.pokemonIndex);
    })
  }
}

export interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}