import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";
import { Pie } from "./components/pie/pie";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('panaderia');
}
