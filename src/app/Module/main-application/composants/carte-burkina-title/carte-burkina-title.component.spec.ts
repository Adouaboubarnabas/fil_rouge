import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBurkinaTitleComponent } from './carte-burkina-title.component';

describe('CarteBurkinaTitleComponent', () => {
  let component: CarteBurkinaTitleComponent;
  let fixture: ComponentFixture<CarteBurkinaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteBurkinaTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteBurkinaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
