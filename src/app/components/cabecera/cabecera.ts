import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})
export class Cabecera {
  isLoggingOut: boolean = false; 

  constructor(public auth: Auth, private router: Router) {}

  cerrarSesion() {
    this.isLoggingOut = true;

    setTimeout(() => {
      this.auth.logout(); 
      this.router.navigate(['/']); 
      this.isLoggingOut = false; 
    }, 1500);
  }
}