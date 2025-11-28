import { Injectable, signal } from '@angular/core';

export interface ItemCesta {
  id: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  cestaItems = signal<ItemCesta[]>([]);

  anadirProducto(id: number, nombre: string, precioUnitario: number, cantidad: number = 1) {
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

  eliminarItem(id: number) {
    this.cestaItems.update(arr => arr.filter(item => item.id !== id));
  }

  calcularTotal() {
    return this.cestaItems().reduce(
      (total, item) => total + item.cantidad * item.precioUnitario,
      0
    );
  }

  finalizarCompra() {
    this.cestaItems.set([]);
  }
}
