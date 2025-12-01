import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar el listado de croissants disponibles.
 * Permite añadir productos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-croissant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './croissant.html',
  styleUrl: './croissant.css',
})
export class Croissant {

  /**
   * Constructor del componente Croissant.
   *
   * @param {CestaService} cesta - Servicio que gestiona la cesta de compra y los productos añadidos.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto al carrito de compras mediante el servicio CestaService.
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
