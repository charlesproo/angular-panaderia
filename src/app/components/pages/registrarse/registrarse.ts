import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private authService: Auth, private router: Router) { } 

  onSubmit(): void {
    if (this.usuario.nombre && this.usuario.apellido && this.usuario.email && this.usuario.contrasenia) {
      this.authService.almacenarUsuario(this.usuario.nombre, this.usuario.apellido, this.usuario.email, this.usuario.contrasenia);
      alert('Usuario registrado correctamente');
      
      this.router.navigate(['']);  
      
      this.usuario = { nombre: '', apellido: '', contrasenia: '', email: ''};
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
}