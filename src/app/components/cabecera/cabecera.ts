//IMPORTAMOS MODULOS DE ANGULAR Y EL SERIVCE AUTH
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

//DECORADOR COMPONENT PARA DEFINIR LA CLASE COMO UN COMPONENTE DE ANGULAR
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})

//CLASE PRINCIPAL DEL COMPONENTE DE LA CABECERA
export class Cabecera {
  isLoggingOut: boolean = false; 

  //CONSTRUCTOR: INYECTAMOS EL SERVICIO AUTH Y EL ROUTER
  constructor(public auth: Auth, private router: Router) {}

  //METODO PARA CERRAR SESION
  cerrarSesion() {
    this.isLoggingOut = true;

    //ESTABLECEMOS UN RETARDO PARA SIMULAR UN EFECTO DE CERRANDO SESION
    setTimeout(() => {
      this.auth.logout(); 
      this.router.navigate(['/']); 
      this.isLoggingOut = false; 
    }, 1000);  //RETARDO 1 SEG
  }
}