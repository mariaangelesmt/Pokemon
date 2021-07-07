import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFrikiComponent } from './poke-friki.component';

describe('PokeFrikiComponent', () => {
  let component: PokeFrikiComponent;
  let fixture: ComponentFixture<PokeFrikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFrikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFrikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
