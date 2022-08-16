import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPartenaireComponent } from './presentation-partenaire.component';

describe('PresentationPartenaireComponent', () => {
  let component: PresentationPartenaireComponent;
  let fixture: ComponentFixture<PresentationPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationPartenaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
