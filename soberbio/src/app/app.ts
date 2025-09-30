import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu/menu';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Menu],
})
export class App {
  readonly title = 'soberbio';
  readonly currentYear = new Date().getFullYear();
}




