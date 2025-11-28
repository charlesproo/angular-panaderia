import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
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
  successMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  onLogin() {
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