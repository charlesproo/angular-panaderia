import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

/**
 * Componente encargado de mostrar la vista principal de la pastelería.
 * Sirve como página de navegación hacia diferentes secciones relacionadas
 * con productos o categorías de la pastelería.
 *
 * @component
 */
@Component({
  selector: 'app-pasteleria',
  imports: [RouterLink],
  templateUrl: './pasteleria.html',
  styleUrl: './pasteleria.css',
})
export class Pasteleria {

  /**
   * Constructor del componente Pasteleria.
   * Actualmente no requiere dependencias, ya que funciona como vista estática
   * o punto de navegación dentro de la aplicación.
   */
  constructor() {}
}
