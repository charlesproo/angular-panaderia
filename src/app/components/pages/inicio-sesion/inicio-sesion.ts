import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Para *ngIf
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-inicio-sesion',
  imports: [FormsModule, CommonModule], 
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage: string = '';
  successMessage: string = ''; // Nueva propiedad para mensaje de éxito

  constructor(private auth: Auth, private router: Router) {}

  onLogin() {
    if (this.auth.validarCredenciales(this.loginData.email, this.loginData.password)) {
      this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...'; // Mensaje de éxito
      this.errorMessage = ''; // Limpiar error
      setTimeout(() => {
        this.router.navigate(['']); // Redirigir después de un breve delay para mostrar el mensaje
      }, 2000); // 2 segundos de delay
    } else {
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.successMessage = ''; // Limpiar éxito
    }
  }
}
