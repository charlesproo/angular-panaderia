import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pastelito } from './pastelito';
import { RouterTestingModule } from '@angular/router/testing'; // <-- IMPORTANTE

describe('Pastelito', () => {
  let component: Pastelito;
  let fixture: ComponentFixture<Pastelito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Pastelito,
        RouterTestingModule // <-- Provee ActivatedRoute y Router para tests
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Pastelito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
