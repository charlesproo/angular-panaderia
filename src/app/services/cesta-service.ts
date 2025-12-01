import { Injectable, signal } from '@angular/core';

/**
 * Interfaz que representa un producto dentro de la cesta de compra.
 */
export interface ItemCesta {
  /** Identificador único del producto */
  id: number;
  /** Nombre del producto */
  nombre: string;
  /** Cantidad del producto en la cesta */
  cantidad: number;
  /** Precio unitario del producto */
  precioUnitario: number;
}

/**
 * Servicio encargado de gestionar la lógica de la cesta de compra.
 * Permite añadir productos, eliminar productos, calcular el total
 * y finalizar la compra.
 *
 * @service
 */
@Injectable({
  providedIn: 'root'
})
export class CestaService {

  /**
   * Signal que almacena los productos actualmente en la cesta.
   */
  cestaItems = signal<ItemCesta[]>([]);

  /**
   * Añade un producto a la cesta o incrementa su cantidad si ya existe.
   *
   * @param {number} id - Identificador único del producto.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precioUnitario - Precio unitario del producto.
   * @param {number} [cantidad=1] - Cantidad a añadir (por defecto 1).
   * @returns {void}
   */
  anadirProducto(id: number, nombre: string, precioUnitario: number, cantidad: number = 1): void {
    const items = this.cestaItems();
    const existe = items.find(item => item.id === id);

    if (existe) {
      this.cestaItems.update(arr =>
        arr.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      );
    } else {
      this.cestaItems.update(arr => [
        ...arr,
        { id, nombre, precioUnitario, cantidad }
      ]);
    }
  }

  /**
   * Elimina un producto de la cesta por su ID.
   *
   * @param {number} id - Identificador del producto a eliminar.
   * @returns {void}
   */
  eliminarItem(id: number): void {
    this.cestaItems.update(arr => arr.filter(item => item.id !== id));
  }

  /**
   * Calcula el total de la cesta sumando cantidad * precio unitario de cada producto.
   *
   * @returns {number} Total acumulado de la cesta.
   */
  calcularTotal(): number {
    return this.cestaItems().reduce(
      (total, item) => total + item.cantidad * item.precioUnitario,
      0
    );
  }

  /**
   * Vacía la cesta después de finalizar la compra.
   *
   * @returns {void}
   */
  finalizarCompra(): void {
    this.cestaItems.set([]);
  }
}
