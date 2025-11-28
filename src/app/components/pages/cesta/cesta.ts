import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CestaService } from '../../../services/cesta-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './cesta.html',
  styleUrls: ['./cesta.css']
})
export class Cesta {

  constructor(public cesta: CestaService) {}

  eliminarItem(id: number): void {
    this.cesta.eliminarItem(id);
  }

  calcularTotal(): number {
    return this.cesta.calcularTotal();
  }

  finalizarCompra(): void {
    this.cesta.finalizarCompra();
  }
}
