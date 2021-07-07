import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { PokedexHomeService } from '../services/pokedex-home.service';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.css']
})
export class PokedexDetailsComponent implements OnInit {

  pokedexEntryList : PokemonEntry[] = [];
  pokedexFiltered: PokemonEntry []= [];
  pokedexIndex: number = 20;

  constructor(private pokedexService: PokedexHomeService, private route: ActivatedRoute) {
    const id= this.route.snapshot.paramMap.get('entry') as string;
    this.pokedexService.getPokedex(id)
      .then(res => this.pokedexEntryList = res)
      .then(res => this.pokedexFiltered = res.slice(0, this.pokedexIndex));
    this.infoPokemon(this.pokedexIndex)
   }

  ngOnInit(): void {
  }

  next(): void {
    this.pokedexFiltered = this.pokedexEntryList.slice(this.pokedexIndex, this.pokedexIndex + 20);
    this.pokedexIndex += 20;
    this.infoPokemon(this.pokedexIndex)
  }

  back(): void {
    this.pokedexFiltered = this.pokedexEntryList.slice(this.pokedexIndex -40, this.pokedexIndex - 20);
    this.pokedexIndex -= 20;
    this.infoPokemon(this.pokedexIndex)
  }

  infoPokemon(index : number) {
    let routePokemon : string[] = [];
    for (let i = index - 19; i <= index; i++) {
      routePokemon.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }
    
    const promises = routePokemon.map(url => axios.get(url))

    Promise.all(promises)
    .then(res => res.map(r => r.data))
    .then(data => {
      this.pokedexFiltered.forEach((poke, index) => {
        poke.image = data[index].sprites.other.dream_world.front_default;
        poke.type = data[index].types.map((dataType: any) => {
          return {
            name: dataType.type.name
          }
        })
        //poke.moves = data[index].moves.map((dataMove: any) => {
        //  return {
         //   name: dataMove.move.name
         // }
       // })
      })
    });
  }
}


export interface Language {
  name: string;
  url: string;
}

export interface Description {
  description: string;
  language: Language;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface Name {
  language: Language2;
  name: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Type {
  name: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
  image: string;
  type: Type[];
}




export interface SinglePokedex {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region?: any;
  version_groups: any[];
}
