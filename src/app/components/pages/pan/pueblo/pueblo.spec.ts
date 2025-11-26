import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pueblo } from './pueblo';

describe('Pueblo', () => {
  let component: Pueblo;
  let fixture: ComponentFixture<Pueblo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pueblo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pueblo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
