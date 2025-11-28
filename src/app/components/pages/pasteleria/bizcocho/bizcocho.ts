import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-bizcocho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bizcocho.html',
  styleUrl: './bizcocho.css',
})
export class Bizcocho {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
