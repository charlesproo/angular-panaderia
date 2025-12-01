import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasteleria } from './pasteleria';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('Pasteleria', () => {
  let component: Pasteleria;
  let fixture: ComponentFixture<Pasteleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Pasteleria,          
        RouterTestingModule   
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Pasteleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
