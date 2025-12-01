import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cesta } from './cesta';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('Cesta', () => {
  let component: Cesta;
  let fixture: ComponentFixture<Cesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Cesta,               
        RouterTestingModule  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Cesta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
