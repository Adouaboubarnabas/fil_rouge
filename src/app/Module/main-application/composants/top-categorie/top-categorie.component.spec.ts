import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategorieComponent } from './top-categorie.component';

describe('TopCategorieComponent', () => {
  let component: TopCategorieComponent;
  let fixture: ComponentFixture<TopCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
