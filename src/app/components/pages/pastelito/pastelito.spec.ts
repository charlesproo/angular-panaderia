import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastelito } from './pastelito';

describe('Pastelito', () => {
  let component: Pastelito;
  let fixture: ComponentFixture<Pastelito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastelito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastelito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
