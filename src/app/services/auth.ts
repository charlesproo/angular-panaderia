import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usuarios: Usuario[] = [];
  
  constructor() {
    const almacenUsuarios = localStorage.getItem('usuarios');
    if (almacenUsuarios) {
      this.usuarios = JSON.parse(almacenUsuarios);
      console.log('Usuarios cargados desde localStorage:', this.usuarios); 
    } else {
      console.log('No hay usuarios en localStorage, array vacío:', this.usuarios);
    }
  }

  almacenarUsuario(nombre: string, apellido: string, email: string, contrasenia: string): void { 
    const nuevoUsuario = new Usuario(nombre, apellido, email, contrasenia);
    this.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    console.log('Usuario registrado, array actualizado:', this.usuarios);  
  }

  validarCredenciales(correo: string, contraseña: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.email === correo && usuario.contrasenia === contraseña
    );
    console.log('Validando credenciales, usuarios en array:', this.usuarios);  
    return !!usuarioEncontrado;  
  }
}
