import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-croissant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './croissant.html',
  styleUrl: './croissant.css',
})
export class Croissant {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
