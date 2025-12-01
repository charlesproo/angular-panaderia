import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar los productos de tipo “blanco”
 * y permitir añadirlos a la cesta mediante el servicio `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-blanco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blanco.html',
  styleUrls: ['./blanco.css']
})
export class Blanco {

  /**
   * Constructor del componente Blanco.
   *
   * @param {CestaService} cesta - Servicio responsable de gestionar la cesta de compra.
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
