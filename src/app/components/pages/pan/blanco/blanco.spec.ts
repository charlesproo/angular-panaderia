import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blanco } from './blanco';

describe('Blanco', () => {
  let component: Blanco;
  let fixture: ComponentFixture<Blanco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blanco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blanco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
