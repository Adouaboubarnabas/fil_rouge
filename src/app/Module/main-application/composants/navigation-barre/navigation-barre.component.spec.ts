import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarreComponent } from './navigation-barre.component';

describe('NavigationBarreComponent', () => {
  let component: NavigationBarreComponent;
  let fixture: ComponentFixture<NavigationBarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
