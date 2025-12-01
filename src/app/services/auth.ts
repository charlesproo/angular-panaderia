// IMPORTACION DE UN MODULO DE ANGULAR Y LA CLASE USUARIO QUE CREAMOS ANTERIORMENTE
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import * as encriptacion from 'bcryptjs'

/**
 * Servicio de autenticación encargado de gestionar el registro,
 * inicio de sesión y control de usuarios dentro de la aplicación.
 *
 * - Almacena usuarios en localStorage
 * - Permite validar credenciales cifradas con bcrypt
 * - Mantiene el estado de sesión del usuario actual
 */
@Injectable({
  providedIn: 'root',
})
export class Auth {
  /** Lista de usuarios almacenados en localStorage */
  private usuarios: Usuario[] = [];

  /** Indica si el usuario está actualmente logueado */
  private _isLoggedIn: boolean = false;

  /** Usuario actualmente autenticado */
  private usuarioActual: Usuario | null = null;

  /** Número de rondas para el cifrado bcrypt */
  private readonly valorSeguro = 10;

  /**
   * Constructor del servicio.
   * Recupera los usuarios del localStorage y genera un usuario por defecto si no existe.
   */
  constructor() {
    const almacenUsuarios = localStorage.getItem('usuarios');

    if (almacenUsuarios) {
      this.usuarios = JSON.parse(almacenUsuarios);
    }

    this.crearUsuarioPorDefecto();
  }

  /**
   * Crea un usuario por defecto si no existe.
   * Este usuario siempre está disponible para pruebas:
   * - Email: fernando.prueba@angular.com
   * - Contraseña: 12345678Fp.
   *
   * @private
   */
  private crearUsuarioPorDefecto(): void {
    const usuarioDefecto = this.usuarios.find(
      usuario => usuario.email === 'fernando.prueba@angular.com'
    );

    if (!usuarioDefecto) {
      this.almacenarUsuario('Fernando', 'Prueba', 'fernando.prueba@angular.com', '12345678Fp.');
    }
  }

  /**
   * Retorna si existe un usuario logueado en el sistema.
   *
   * @returns {boolean} `true` si el usuario está autenticado, `false` en caso contrario.
   */
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  /**
   * Registra un nuevo usuario en la aplicación.
   * La contraseña se encripta utilizando bcrypt antes de almacenarse.
   *
   * @param nombre - Nombre del usuario
   * @param apellido - Apellido del usuario
   * @param email - Email del usuario (único)
   * @param contrasenia - Contraseña sin cifrar
   */
  almacenarUsuario(nombre: string, apellido: string, email: string, contrasenia: string): void {
    const hashClave = encriptacion.hashSync(contrasenia, this.valorSeguro);

    const nuevoUsuario = new Usuario(nombre, apellido, email, hashClave);

    this.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  /**
   * Valida las credenciales proporcionadas por el usuario.
   * Comprueba si existe un usuario con ese correo y si la contraseña coincide
   * mediante comparación bcrypt.
   *
   * @param correo - Email del usuario que intenta iniciar sesión
   * @param contrasenia - Contraseña sin cifrar introducida por el usuario
   * @returns {boolean} `true` si las credenciales son correctas, `false` si son inválidas
   */
  validarCredenciales(correo: string, contrasenia: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      usuario => usuario.email === correo
    );

    let valido = false;

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

  /**
   * Cierra la sesión del usuario actual.
   * Restablece el estado de autenticación.
   */
  logout(): void {
    this._isLoggedIn = false;
    this.usuarioActual = null;
  }
}
