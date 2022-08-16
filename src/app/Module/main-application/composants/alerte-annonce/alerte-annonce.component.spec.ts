import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteAnnonceComponent } from './alerte-annonce.component';

describe('AlerteAnnonceComponent', () => {
  let component: AlerteAnnonceComponent;
  let fixture: ComponentFixture<AlerteAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlerteAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerteAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
