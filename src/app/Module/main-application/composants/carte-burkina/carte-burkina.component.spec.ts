import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBurkinaComponent } from './carte-burkina.component';

describe('CarteBurkinaComponent', () => {
  let component: CarteBurkinaComponent;
  let fixture: ComponentFixture<CarteBurkinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteBurkinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteBurkinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
