import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar y gestionar el listado de magdalenas.
 * Permite añadir productos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-magdalenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magdalenas.html',
  styleUrl: './magdalenas.css',
})
export class Magdalenas {

  /**
   * Constructor del componente Magdalenas.
   *
   * @param {CestaService} cesta - Servicio encargado de gestionar los productos añadidos a la cesta de compra.
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
