import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-pueblo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pueblo.html',
  styleUrl: './pueblo.css',
})
export class Pueblo {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
