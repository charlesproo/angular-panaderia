import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cabecera } from './cabecera';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('Cabecera', () => {
  let component: Cabecera;
  let test: ComponentFixture<Cabecera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Cabecera,            
        RouterTestingModule  
      ]
    }).compileComponents();

    test = TestBed.createComponent(Cabecera);
    component = test.componentInstance;
    test.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
