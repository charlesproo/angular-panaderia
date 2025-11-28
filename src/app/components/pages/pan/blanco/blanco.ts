import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../../../services/cesta-service';

@Component({
  selector: 'app-blanco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blanco.html',
  styleUrls: ['./blanco.css']
})
export class Blanco {
  constructor(public cesta: CestaService) {}

  anadirProducto(id: number, nombre: string, precio: number) {
    this.cesta.anadirProducto(id, nombre, precio);
  }
}
