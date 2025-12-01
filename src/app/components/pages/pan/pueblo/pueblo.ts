import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente que muestra los productos de tipo “pueblo” (panes tradicionales)
 * y permite añadirlos a la cesta mediante el servicio CestaService.
 *
 * @component
 */
@Component({
  selector: 'app-pueblo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pueblo.html',
  styleUrl: './pueblo.css',
})
export class Pueblo {

  /**
   * Constructor del componente Pueblo.
   *
   * @param {CestaService} cesta - Servicio de gestión de la cesta de compra.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto a la cesta.
   *
   * @param {number} id - Identificador único del producto.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio del producto.
   * @returns {void}
   */
  anadirProducto(id: number, nombre: string, precio: number): void {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
