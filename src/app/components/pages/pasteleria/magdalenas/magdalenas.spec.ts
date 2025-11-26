import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Magdalenas } from './magdalenas';

describe('Magdalenas', () => {
  let component: Magdalenas;
  let fixture: ComponentFixture<Magdalenas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Magdalenas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Magdalenas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
