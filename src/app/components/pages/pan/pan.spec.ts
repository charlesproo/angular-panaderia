import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pan } from './pan';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('Pan', () => {
  let component: Pan;
  let fixture: ComponentFixture<Pan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Pan,               
        RouterTestingModule  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Pan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
