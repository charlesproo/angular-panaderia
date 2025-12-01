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
export class Registrarse {

  /**
   * Datos del formulario de registro del usuario.
   */
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    contrasenia: ''
  };

  /**
   * Lista de errores detectados durante la validación de la contraseña.
   * Se muestra dinámicamente en la interfaz.
   */
  passwordErrors: string[] = []; 

  /**
   * Reglas de validación que debe cumplir la contraseña.
   */
  private readonly REQUISITOS = {
    logitudMinima: 8,
    mayusculas: /[A-Z]/,
    minusculas: /[a-z]/,
    numeros: /[0-9]/,
    caracterEspecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  };

  /**
   * Constructor del componente.
   * @param authService Servicio de autenticación encargado de almacenar usuarios.
   * @param router Permite redirigir al usuario tras el registro.
   */
  constructor(private authService: Auth, private router: Router) { } 

  /**
   * Valida si la contraseña del usuario cumple con todos los requisitos:
   * - Longitud mínima
   * - Contiene mayúsculas
   * - Contiene minúsculas
   * - Contiene dígitos numéricos
   * - Contiene caracteres especiales
   * 
   * @returns `true` si la contraseña es válida, `false` si no cumple los requisitos.
   */
  validarContrasenia(): boolean {
    const clave = this.usuario.contrasenia;
    this.passwordErrors = []; 
    
    // Longitud mínima
    if (clave.length < this.REQUISITOS.logitudMinima) {
      this.passwordErrors.push(`Debe tener al menos ${this.REQUISITOS.logitudMinima} caracteres.`);
    }

    // Mayúsculas
    if (!this.REQUISITOS.mayusculas.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos una letra mayúscula.');
    }

    // Minúsculas
    if (!this.REQUISITOS.minusculas.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos una letra minúscula.');
    }

    // Números
    if (!this.REQUISITOS.numeros.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos un número.');
    }

    // Caracter especial
    if (!this.REQUISITOS.caracterEspecial.test(clave)) {
      this.passwordErrors.push('Debe incluir al menos un carácter especial (ej. !@#$%).');
    }

    return this.passwordErrors.length === 0;
  }

  /**
   * Maneja el envío del formulario:
   * 1. Verifica que todos los campos estén completos.
   * 2. Valida la contraseña con los requisitos definidos.
   * 3. Almacena el nuevo usuario en el servicio.
   * 4. Navega a la pantalla inicial tras un registro exitoso.
   * 5. Limpia los campos del formulario.
   */
  onSubmit(): void {
    // Validar campos obligatorios
    if (!this.usuario.nombre || !this.usuario.apellido || !this.usuario.email || !this.usuario.contrasenia) {
      alert('⚠️ Por favor, complete todos los campos.');
      return; 
    }
    
    // Validación de contraseña
    if (!this.validarContrasenia()) {
      alert('❌ La contraseña no cumple con los requisitos de seguridad.');
      return;
    }

    // Registrar usuario
    this.authService.almacenarUsuario(
      this.usuario.nombre,
      this.usuario.apellido,
      this.usuario.email,
      this.usuario.contrasenia
    );

    alert('✅ Usuario registrado correctamente');
    
    this.router.navigate(['']);  
    
    // Limpiar formulario
    this.usuario = { nombre: '', apellido: '', contrasenia: '', email: ''};
  }
}
