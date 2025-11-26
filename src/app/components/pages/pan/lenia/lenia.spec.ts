import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lenia } from './lenia';

describe('Lenia', () => {
  let component: Lenia;
  let fixture: ComponentFixture<Lenia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lenia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lenia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
