import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pastelito',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './pastelito.html',
  styleUrls: ['./pastelito.css'],
})
export class Pastelito {
  textoBuscar: string = '';
  mostrarTranscripcion: boolean = false;

  
  todosLosProductos = [
    { id: 13, nombre: 'Bizcocho ', categoria: 'Pastelería', precio: 5.50, img: 'https://...' },
    { id: 16, nombre: 'Croissant ', categoria: 'Pastelería', precio: 2.50, img: 'https://...' },
    { id: 19, nombre: 'Galletas ', categoria: 'Pastelería', precio: 3.50, img: 'https://...' },
    { id: 1, nombre: 'Pan de Pueblo', categoria: 'Panes', precio: 1.20, img: 'https://www.recetasderechupete.com/wp-content/uploads/2020/04/Pan-de-pueblo.jpg' }
   
  ];
  
  // Función que devuelve los productos filtrados en tiempo real
  get productosFiltrados() {
    return this.todosLosProductos.filter(p => 
      p.nombre.toLowerCase().includes(this.textoBuscar.toLowerCase())
    );
  }

  anadirProducto(id: number, nombre: string, precio: number) {
    console.log(`Añadido al carrito: ${nombre}`);
  }
}