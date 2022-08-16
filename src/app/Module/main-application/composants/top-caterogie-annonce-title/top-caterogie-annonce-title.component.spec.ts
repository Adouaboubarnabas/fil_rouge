import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCaterogieAnnonceTitleComponent } from './top-caterogie-annonce-title.component';

describe('TopCaterogieAnnonceTitleComponent', () => {
  let component: TopCaterogieAnnonceTitleComponent;
  let fixture: ComponentFixture<TopCaterogieAnnonceTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCaterogieAnnonceTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCaterogieAnnonceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
