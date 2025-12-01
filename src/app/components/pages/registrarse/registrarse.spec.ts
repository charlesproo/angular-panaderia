import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registrarse } from './registrarse';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('Registrarse', () => {
  let component: Registrarse;
  let fixture: ComponentFixture<Registrarse>;
  let authServiceSpy: jasmine.SpyObj<Auth>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('Auth', ['almacenarUsuario']);
    const rSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, Registrarse], 
      providers: [
        { provide: Auth, useValue: authSpy },
        { provide: Router, useValue: rSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Registrarse);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(Auth) as jasmine.SpyObj<Auth>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberias registrarse en la bd', () => {
    component.usuario = {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@correo.com',
      contrasenia: 'Password1!'
    };

    spyOn(window, 'alert');

    component.onSubmit();

    expect(authServiceSpy.almacenarUsuario).toHaveBeenCalledWith(
      'Juan', 'Pérez', 'juan@correo.com', 'Password1!'
    );
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
    expect(window.alert).toHaveBeenCalledWith('✅ Usuario registrado correctamente');
    expect(component.usuario.nombre).toBe(''); 
  });

  it('NO debe registrarse si un campo esta empty', () => {
    component.usuario = { nombre: '', apellido: '', email: '', contrasenia: '' };

    spyOn(window, 'alert');

    component.onSubmit();

    expect(authServiceSpy.almacenarUsuario).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('⚠️ Por favor, complete todos los campos.');
  });

  it('No debe registrarse el usuario si la clave es incorrecta', () => {
    component.usuario = {
      nombre: 'Ana',
      apellido: 'Gómez',
      email: 'ana@correo.com',
      contrasenia: '12345678'
    };

    spyOn(window, 'alert');

    component.onSubmit();

    expect(authServiceSpy.almacenarUsuario).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('❌ La contraseña no cumple con los requisitos de seguridad.');
  });
});
