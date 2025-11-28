import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

interface ItemCesta {
  id: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  cestaItems = signal<ItemCesta[]>([
    { id: 1, nombre: 'Pan de Leña', cantidad: 2, precioUnitario: 3.50 },
    { id: 2, nombre: 'Croissant de Mantequilla', cantidad: 4, precioUnitario: 1.20 },
    { id: 3, nombre: 'Bizcocho de Chocolate', cantidad: 1, precioUnitario: 8.99 },
  ]);

  calcularTotal(): number {
    return this.cestaItems().reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
  }

  eliminarItem(id: number): void {
    this.cestaItems.update(items => items.filter(item => item.id !== id));
  }

  finalizarCompra(): void {
    if (this.cestaItems().length === 0) {
      alert('La cesta está vacía. Añade productos para continuar.');
      return;
    }
    alert(`Compra finalizada con éxito. Total: ${this.calcularTotal().toFixed(2)}€`);
    this.cestaItems.set([]);
  }
}