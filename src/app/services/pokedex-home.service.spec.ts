import { TestBed } from '@angular/core/testing';

import { PokedexHomeService } from './pokedex-home.service';

describe('PokedexHomeService', () => {
  let service: PokedexHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
