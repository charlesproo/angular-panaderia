import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CestaService } from '../../../services/cesta-service';
import { RouterLink } from "@angular/router";

/**
 * Componente encargado de mostrar el contenido de la cesta de compra,
 * así como permitir eliminar productos, calcular el total y finalizar la compra.
 *
 * @component
 */
@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './cesta.html',
  styleUrls: ['./cesta.css']
})
export class Cesta {

  /**
   * Constructor del componente Cesta.
   *
   * @param {CestaService} cesta - Servicio que gestiona los productos de la cesta.
   */
  constructor(public cesta: CestaService) {}

  /**
   * Elimina un producto de la cesta por su ID.
   *
   * @param {number} id - Identificador único del producto a eliminar.
   * @returns {void}
   */
  eliminarItem(id: number): void {
    this.cesta.eliminarItem(id);
  }

  /**
   * Calcula el precio total de todos los productos en la cesta.
   *
   * @returns {number} Total acumulado de la cesta.
   */
  calcularTotal(): number {
    return this.cesta.calcularTotal();
  }

  /**
   * Finaliza la compra llamando al servicio CestaService.
   *
   * @returns {void}
   */
  finalizarCompra(): void {
    this.cesta.finalizarCompra();
  }
}
