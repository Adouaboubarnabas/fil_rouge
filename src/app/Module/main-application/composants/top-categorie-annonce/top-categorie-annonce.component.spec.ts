import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategorieAnnonceComponent } from './top-categorie-annonce.component';

describe('TopCategorieAnnonceComponent', () => {
  let component: TopCategorieAnnonceComponent;
  let fixture: ComponentFixture<TopCategorieAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategorieAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCategorieAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
