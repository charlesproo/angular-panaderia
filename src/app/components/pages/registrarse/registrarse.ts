import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  
import { Auth } from '../../../services/auth';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './registrarse.html',
  styleUrls: ['./registrarse.css']
})
export class RegistrarseComponent {
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    contrasenia: ''
  };

  //Variable para almacenar los mensajes de error de la contraseña
  passwordErrors: string[] = []; 

  // Requisitos de la contraseña
  private readonly REQUISITOS = {
    minLength: 8,
    hasUpperCase: /[A-Z]/,
    hasLowerCase: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  };

  constructor(private authService: Auth, private router: Router) { } 

  //Función que verifica si la contraseña cumple con todos los requisitos.
  validarContrasenia(): boolean {
    const clave = this.usuario.contrasenia;
    this.passwordErrors = []; // Limpiar errores anteriores
    
    // 1. Longitud Mínima
    if (clave.length < this.REQUISITOS.minLength) {
      this.passwordErrors.push(`Debe tener al menos ${this.REQUISITOS.minLength} caracteres.`);
    }

    // 2. Mayus
    if (!this.REQUISITOS.hasUpperCase.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos una letra mayúscula.');
    }

    // 3. Minusculas
    if (!this.REQUISITOS.hasLowerCase.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos una letra minúscula.');
    }

    // 4. Numeros
    if (!this.REQUISITOS.hasNumber.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos un número.');
    }

    // 5. Caracteres especiales
    if (!this.REQUISITOS.hasSpecialChar.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos un carácter especial (ej. !@#$%).');
    }

    return this.passwordErrors.length === 0;
  }

  onSubmit(): void {
    // 1. Verificar que todos los campos obligatorios estén llenos
    if (!this.usuario.nombre || !this.usuario.apellido || !this.usuario.email || !this.usuario.contrasenia) {
      alert('⚠️ Por favor, complete todos los campos.');
      return; 
    }
    
    // 2. Ejecutar la validación detallada de la contraseña
    if (!this.validarContrasenia()) {
      // Si hay errores, los mensajes ya están en 'this.passwordErrors'.
      // Puedes mostrar un resumen o dejar que el HTML muestre la lista detallada.
      alert('❌ La contraseña no cumple con los requisitos de seguridad.');
      return;
    }

    // 3. Si todo es válido: Almacenar usuario, Navegar y Limpiar
    this.authService.almacenarUsuario(this.usuario.nombre, this.usuario.apellido, this.usuario.email, this.usuario.contrasenia);
    alert('✅ Usuario registrado correctamente');
    
    this.router.navigate(['']);  
    
    this.usuario = { nombre: '', apellido: '', contrasenia: '', email: ''};
  }
}