import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar los productos de tipo “lenia”
 * y permitir añadirlos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-lenia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lenia.html',
  styleUrl: './lenia.css',
})
export class Lenia {

  /**
   * Constructor del componente Lenia.
   *
   * @param {CestaService} cesta - Servicio responsable de gestionar la cesta de compra.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto a la cesta de compras utilizando `CestaService`.
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
