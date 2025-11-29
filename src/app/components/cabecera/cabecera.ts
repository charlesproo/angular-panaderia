//IMPORTAMOS MODULOS DE ANGULAR Y EL SERIVCE AUTH
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

/**
 * @description Componente de la cabecera principal de la aplicación.
 * Este componente se encarga de mostrar la navegación y manejar la lógica
 * de cerrar sesión del usuario.
 * @author [Charles]
 * @version 1.0.0
 * @see {@link Auth} El servicio de autenticación inyectado.
 */
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})

//CLASE PRINCIPAL DEL COMPONENTE DE LA CABECERA
export class Cabecera {

  /**
   * Indica si la acción de cerrar sesión está en curso.
   * Se utiliza para mostrar un mensaje o spinner de "Cerrando Sesión...".
   * @type {boolean}
   */
  isLoggingOut: boolean = false; 

  /**
   * @description Constructor del componente. Inyecta el servicio de autenticación y el router.
   * @param {Auth} auth - Servicio de autenticación para gestionar el estado del usuario.
   * @param {Router} router - Router de Angular para la navegación después del logout.
   */
  constructor(public auth: Auth, private router: Router) {}

  /**
   * @description Cierra la sesión del usuario.
   * Simula un retardo de 1 segundo antes de redirigir al home (`/`).
   * @returns {void}
   */
  cerrarSesion(): void {
    this.isLoggingOut = true;

    //ESTABLECEMOS UN RETARDO PARA SIMULAR UN EFECTO DE CERRANDO SESION
    setTimeout(() => {
      this.auth.logout(); 
      this.router.navigate(['/']); 
      this.isLoggingOut = false; 
    }, 1000);  //RETARDO 1 SEG
  }
}