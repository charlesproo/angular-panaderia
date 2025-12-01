import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";
import { Pie } from "./components/pie/pie";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Cabecera, Pie, RouterModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('panaderia');
}