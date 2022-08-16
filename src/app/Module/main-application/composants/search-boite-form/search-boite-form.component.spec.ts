import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoiteFormComponent } from './search-boite-form.component';

describe('SearchBoiteFormComponent', () => {
  let component: SearchBoiteFormComponent;
  let fixture: ComponentFixture<SearchBoiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoiteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
