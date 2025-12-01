import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InicioSesion } from './inicio-sesion';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('InicioSesion', () => {
  let component: InicioSesion;
  let fixture: ComponentFixture<InicioSesion>;
  let authSpy: jasmine.SpyObj<Auth>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const aSpy = jasmine.createSpyObj('Auth', ['validarCredenciales']);
    const rSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, InicioSesion],
      providers: [
        { provide: Auth, useValue: aSpy },
        { provide: Router, useValue: rSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioSesion);
    component = fixture.componentInstance;
    authSpy = TestBed.inject(Auth) as jasmine.SpyObj<Auth>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia loguearse corectamente con las credenciales correctas', fakeAsync(() => {
    component.loginData = { email: 'juan@correo.com', password: 'Password1!' };
    authSpy.validarCredenciales.and.returnValue(true);

    component.onLogin();
    
    expect(component.successMessage).toBe('Inicio de sesión exitoso. Redirigiendo...');
    expect(component.errorMessage).toBe('');

    //Simulamos tiempo de espera
    tick(1000); 
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  }));

  it('Deberias mostrar un error de credenciales', () => {
    component.loginData = { email: 'juan@correo.com', password: 'babyDimeQueSi' };
    authSpy.validarCredenciales.and.returnValue(false);

    component.onLogin();

    expect(component.successMessage).toBe('');
    expect(component.errorMessage).toBe('Credenciales incorrectas. Inténtalo de nuevo.');
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
