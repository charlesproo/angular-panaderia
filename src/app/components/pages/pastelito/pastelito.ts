import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

/**
 * Componente encargado de mostrar la vista de "Pastelito".
 * Actualmente no contiene lógica interna, pero sirve como punto de navegación
 * dentro de la aplicación mediante el uso de RouterLink.
 *
 * @component
 */
@Component({
  selector: 'app-pastelito',
  imports: [RouterLink],
  templateUrl: './pastelito.html',
  styleUrls: ['./pastelito.css'], // Corregido styleUrl -> styleUrls
})
export class Pastelito {

  mostrarCta: boolean = true; 

  /**
   * Constructor del componente Pastelito.
   * No recibe dependencias ya que el componente actúa solamente como vista.
   */
  constructor() {}
}
