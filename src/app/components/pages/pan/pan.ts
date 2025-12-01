import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

/**
 * Componente encargado de mostrar la sección de pan dentro de la aplicación.
 *
 * @component
 */
@Component({
  selector: 'app-pan',
  imports: [RouterLink],
  templateUrl: './pan.html',
  styleUrl: './pan.css',
})
export class Pan {

}
