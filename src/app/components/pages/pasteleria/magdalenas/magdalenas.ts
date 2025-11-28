import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-magdalenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magdalenas.html',
  styleUrl: './magdalenas.css',
})
export class Magdalenas {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}