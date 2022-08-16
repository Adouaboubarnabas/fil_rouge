import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategorieTitleComponent } from './top-categorie-title.component';

describe('TopCategorieTitleComponent', () => {
  let component: TopCategorieTitleComponent;
  let fixture: ComponentFixture<TopCategorieTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategorieTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCategorieTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
