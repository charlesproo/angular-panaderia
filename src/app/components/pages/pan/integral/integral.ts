import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-integral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integral.html',
  styleUrl: './integral.css',
})
export class Integral {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
