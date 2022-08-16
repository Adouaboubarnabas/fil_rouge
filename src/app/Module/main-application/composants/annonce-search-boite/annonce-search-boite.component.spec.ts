import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceSearchBoiteComponent } from './annonce-search-boite.component';

describe('AnnonceSearchBoiteComponent', () => {
  let component: AnnonceSearchBoiteComponent;
  let fixture: ComponentFixture<AnnonceSearchBoiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceSearchBoiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceSearchBoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
