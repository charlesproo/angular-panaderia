// IMPORTACION DE UN MODULO DE ANGULAR Y LA CLASE USUARIO QUE CREAMOS ANTERIORMENTE
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import * as encriptacion from 'bcryptjs'

// DECORADOR PARA DEFINIR ESTA CLASE COMO UN SERVICIO INYECTABLE EN TODA LA APLICACIÓN
@Injectable({
  providedIn: 'root',
})

// CLASE DE AUTENTICACION PARA GESTIONAR EL INICIO DE SESION Y REGISTRO DE USUARIOS
export class Auth {
  private usuarios: Usuario[] = [];
  private _isLoggedIn: boolean = false;
  private usuarioActual: Usuario | null = null;

  private readonly valorSeguro = 10;

  // CONSTRUCTOR DEL SERVICIO, SE EJECUTA AL INICIAR EL SERVICIO
  constructor() {
    // RECUPERAMOS LOS USUARIOS ALMACENADOS EN EL LOCAL STORAGE
    const almacenUsuarios = localStorage.getItem('usuarios');
    
    // SI HAY DATOS, LOS PARSEAMOS Y LOS ASIGNAMOS AL ARRAY DE USUARIOS
    if (almacenUsuarios) {
      this.usuarios = JSON.parse(almacenUsuarios);
    } else {
      // SI NO HAY USUARIOS EN EL LOCAL STORAGE, CREAMOS UN USUARIO POR DEFECTO
      this.almacenarUsuario('Fernando', 'Prueba', 'fernando.prueba@angular.com', '12345678Fp.');
    }
  }

  // GETTER BOOLEANO PARA OBTENER EL ESTADO DE LOGUEO DEL USUARIO EN CASO DE QUE ESTE 
  // DEVUELVE TRUE Y SI NO FALSE, UTILIZAREMOS MAS ADELANTE PARA HTML
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // FUNCION PARA AÑADIR UN NUEVO USUARIO AL ARRAY Y AL LOCAL STORAGE
  almacenarUsuario(nombre: string, apellido: string, email: string, contrasenia: string): void {
    const hashClave = encriptacion.hashSync(contrasenia, this.valorSeguro);

    const nuevoUsuario = new Usuario(nombre, apellido, email, hashClave);

    this.usuarios.push(nuevoUsuario);
    // GUARDAMOS EL ARRAY COMPLETO EN EL LOCAL STORAGE CON FORMATO JSON
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  // FUNCION PARA COMPROBAR SI LAS CREDENCIALES COINCIDEN CON UN USUARIO EXISTENTE 
  // DEVOLVIENDO UN BOOLEANO Y RECORRIENDOLO MEDIANTE LAMBDA
  validarCredenciales(correo: string, contrasenia: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.email === correo
    );

    let valido = false;

    // SI SE ENCUENTRA UN USUARIO, SE PONE COMO LOGUEADO Y SE ASIGNA EL USUARIO ACTUAL QUE INICIA SESION
    if (usuarioEncontrado) {
      valido = encriptacion.compareSync(contrasenia, usuarioEncontrado.contrasenia);
    }

    if (valido) {
      this._isLoggedIn = true;
      this.usuarioActual = usuarioEncontrado ?? null;
    } else {
      this._isLoggedIn = false;
      this.usuarioActual = null;
    }

    return this._isLoggedIn;
  }

  // FUNCION PARA CERRAR LA SESION DEL USUARIO PONIENDO A FALSE LA VARIABLE Y NULL AL 
  // USUARIO QUE ESTA PORQUE CIERRA SESION
  logout(): void {
    this._isLoggedIn = false;
    this.usuarioActual = null;
  }
}
