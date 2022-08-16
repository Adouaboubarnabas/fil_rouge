import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceSearchFormComponent } from './annonce-search-form.component';

describe('AnnonceSearchFormComponent', () => {
  let component: AnnonceSearchFormComponent;
  let fixture: ComponentFixture<AnnonceSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
