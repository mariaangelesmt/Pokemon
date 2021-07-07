import { Component, OnInit } from '@angular/core';
import { PokedexHomeService } from '../services/pokedex-home.service';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.css']
})
export class PokedexHomeComponent implements OnInit {

  pokedexList : Pokedex[] = [];

  constructor(private pokedexService : PokedexHomeService) { 
    pokedexService.getAllPokedex().then(res => this.pokedexList = res);
  }

  ngOnInit(): void {
  }

}


export interface Pokedex {
  name: string;
  url: string;
}

export interface PokedexResponse {
  count: number;
  next: string;
  previous?: any;
  results: Pokedex[];
}

