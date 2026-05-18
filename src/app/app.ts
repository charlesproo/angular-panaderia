import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";
import { Pie } from "./components/pie/pie";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Cabecera, Pie, RouterModule, FormsModule, CommonModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    textoBuscar: string = '';

    productosSugeridos = [
        { nombre: 'Pan de Pueblo', link: '/pueblo' },        
        { nombre: 'Pan de Leña', link: '/lenia' },          
        { nombre: 'Pan Blanco', link: '/blanco' },          
        { nombre: 'Pan Integral', link: '/integral' },     
        { nombre: 'Bizcocho de Vainilla', link: '/bizcocho' }, 
        { nombre: 'Croissant Clásico', link: '/croissant' },   
        { nombre: 'Galletas de Chocolate', link: '/galletas' },
        { nombre: 'Magdalenas Caseras', link: '/magdalenas' }
    ];

    constructor(private router: Router) {}

    //  BUSCADOR  de productos
    irAPagina(url: string) {
        this.router.navigate([url]);
        this.textoBuscar = ''; // Limpia el buscador después de navegar
    }

    mostrarBuscador(): boolean {
        const ruta = this.router.url;
        return !(ruta.includes('inicio-sesion') || ruta.includes('registrarse'));
    }

    get sugerenciasFiltradas() {
        if (this.textoBuscar.length < 2) return [];
        return this.productosSugeridos.filter(p => 
            p.nombre.toLowerCase().includes(this.textoBuscar.toLowerCase())
        );
    }
}