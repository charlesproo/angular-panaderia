import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bizcocho } from './bizcocho';

describe('Bizcocho', () => {
  let component: Bizcocho;
  let fixture: ComponentFixture<Bizcocho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bizcocho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bizcocho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
