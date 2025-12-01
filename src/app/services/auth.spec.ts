import { TestBed } from '@angular/core/testing';
import { Auth } from './auth';
import * as bcrypt from 'bcryptjs';

describe('Auth Service', () => {
  let service: Auth;

  beforeEach(() => {
    localStorage.clear(); 
    TestBed.configureTestingModule({ providers: [Auth] });
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe guardar al usuario con la clave encriptada', () => {
    const plainPassword = 'Password123!';
    service.almacenarUsuario('Juan', 'Pérez', 'juan@correo.com', plainPassword);

    const usuarios: any[] = JSON.parse(localStorage.getItem('usuarios')!);
    expect(usuarios.length).toBeGreaterThan(0);

    const stored = usuarios.find(u => u.email === 'juan@correo.com');
    expect(stored).toBeTruthy();
    expect(stored.contrasenia).not.toBe(plainPassword); 
    expect(bcrypt.compareSync(plainPassword, stored.contrasenia)).toBeTrue();
  });

  it('Debe validar las credenciales correctas', () => {
    const email = 'ana@correo.com';
    const password = 'Password123!';
    service.almacenarUsuario('Ana', 'Gómez', email, password);

    expect(service.validarCredenciales(email, password)).toBeTrue();
    expect(service.isLoggedIn).toBeTrue();

    expect(service.validarCredenciales(email, 'wrongpass')).toBeFalse();
    expect(service.isLoggedIn).toBeFalse();
  });

  it('Deberia cerrar sesion correctamente', () => {
    service.almacenarUsuario('Ana', 'Gómez', 'ana@correo.com', 'Password123!');
    service.validarCredenciales('ana@correo.com', 'Password123!');
    expect(service.isLoggedIn).toBeTrue();

    service.logout();
    expect(service.isLoggedIn).toBeFalse();
  });
});
