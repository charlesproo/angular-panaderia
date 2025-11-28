import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usuarios: Usuario[] = [];
  private _isLoggedIn: boolean = false;
  private usuarioActual: Usuario | null = null;

  constructor() {
    const almacenUsuarios = localStorage.getItem('usuarios');
    if (almacenUsuarios) {
      this.usuarios = JSON.parse(almacenUsuarios);
    }
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  almacenarUsuario(nombre: string, apellido: string, email: string, contrasenia: string): void { 
    const nuevoUsuario = new Usuario(nombre, apellido, email, contrasenia);
    this.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  validarCredenciales(correo: string, contraseña: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.email === correo && usuario.contrasenia === contraseña
    );
    
    if (usuarioEncontrado) {
        this._isLoggedIn = true;
        this.usuarioActual = usuarioEncontrado;
    } else {
        this._isLoggedIn = false;
        this.usuarioActual = null;
    }

    return this._isLoggedIn;  
  }

  logout(): void {
    this._isLoggedIn = false;
    this.usuarioActual = null;
  }
}