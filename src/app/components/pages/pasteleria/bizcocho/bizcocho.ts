import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

/**
 * Componente encargado de mostrar los diferentes tipos de bizcochos
 * disponibles y permitir añadirlos a la cesta mediante `CestaService`.
 *
 * @component
 */
@Component({
  selector: 'app-bizcocho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bizcocho.html',
  styleUrl: './bizcocho.css',
})
export class Bizcocho {

  /**
   * Constructor del componente Bizcocho.
   *
   * @param {CestaService} cesta - Servicio responsable de gestionar la cesta de compra.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Añade un producto a la cesta de compras utilizando el servicio CestaService.
   *
   * @param {number} id - ID único del producto.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio del producto.
   * @returns {void}
   */
  anadirProducto(id: number, nombre: string, precio: number): void {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
