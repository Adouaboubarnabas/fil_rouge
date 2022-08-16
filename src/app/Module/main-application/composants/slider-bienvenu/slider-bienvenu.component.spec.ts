import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBienvenuComponent } from './slider-bienvenu.component';

describe('SliderBienvenuComponent', () => {
  let component: SliderBienvenuComponent;
  let fixture: ComponentFixture<SliderBienvenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBienvenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderBienvenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
