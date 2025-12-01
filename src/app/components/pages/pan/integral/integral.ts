import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar los productos de tipo “integral”
 * y permitir añadirlos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-integral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integral.html',
  styleUrl: './integral.css',
})
export class Integral {

  /**
   * Constructor del componente Integral.
   *
   * @param {CestaService} cesta - Servicio encargado de gestionar los productos añadidos a la cesta de compra.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto a la cesta de compras utilizando el servicio CestaService.
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
