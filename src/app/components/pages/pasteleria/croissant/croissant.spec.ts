import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Croissant } from './croissant';

describe('Croissant', () => {
  let component: Croissant;
  let fixture: ComponentFixture<Croissant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Croissant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Croissant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
