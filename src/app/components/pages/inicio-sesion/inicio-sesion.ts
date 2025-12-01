import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

/**
 * Componente encargado del inicio de sesión de usuarios.
 * Gestiona la autenticación mediante el servicio `Auth` y redirige
 * al usuario si las credenciales son correctas.
 *
 * @component
 */
@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion {

  /**
   * Modelo de datos para el formulario de inicio de sesión.
   * @property {string} email - Correo electrónico del usuario.
   * @property {string} password - Contraseña del usuario.
   */
  loginData = {
    email: '',
    password: ''
  };

  /** Mensaje de error a mostrar cuando las credenciales son incorrectas */
  errorMessage: string = '';

  /** Mensaje de éxito a mostrar cuando el inicio de sesión es correcto */
  successMessage: string = '';

  /**
   * Constructor del componente InicioSesion.
   *
   * @param {Auth} auth - Servicio que valida las credenciales de los usuarios.
   * @param {Router} router - Enrutador para redirigir al usuario después del login.
   */
  constructor(private auth: Auth, private router: Router) {}

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Valida las credenciales mediante el servicio Auth.
   * Muestra un mensaje de éxito o error y redirige al usuario si es correcto.
   *
   * @returns {void}
   */
  onLogin(): void {
    if (this.auth.validarCredenciales(this.loginData.email, this.loginData.password)) {
      this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...'; 
      this.errorMessage = ''; 
      setTimeout(() => {
        this.router.navigate(['']); 
      }, 2000); 
    } else {
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.successMessage = ''; 
    }
  }
}
