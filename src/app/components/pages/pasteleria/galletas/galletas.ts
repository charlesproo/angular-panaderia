import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar el listado de galletas disponibles.
 * Permite añadir productos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-galletas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galletas.html',
  styleUrl: './galletas.css',
})
export class Galletas {

  /**
   * Constructor del componente Galletas.
   *
   * @param {CestaService} cesta - Servicio responsable de gestionar los productos añadidos a la cesta de compra.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto al carrito de compras utilizando el servicio CestaService.
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
