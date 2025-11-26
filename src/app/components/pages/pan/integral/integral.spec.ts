import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Integral } from './integral';

describe('Integral', () => {
  let component: Integral;
  let fixture: ComponentFixture<Integral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Integral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Integral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
