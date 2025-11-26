import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan } from './pan';

describe('Pan', () => {
  let component: Pan;
  let fixture: ComponentFixture<Pan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
