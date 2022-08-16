import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDepotAnnonceComponent } from './formulaire-depot-annonce.component';

describe('FormulaireDepotAnnonceComponent', () => {
  let component: FormulaireDepotAnnonceComponent;
  let fixture: ComponentFixture<FormulaireDepotAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDepotAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireDepotAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
