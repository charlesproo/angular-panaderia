import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pasteleria } from './pasteleria';

describe('Pasteleria', () => {
  let component: Pasteleria;
  let fixture: ComponentFixture<Pasteleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pasteleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pasteleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
