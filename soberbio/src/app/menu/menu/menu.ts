import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  readonly links = [
    { label: 'Inicio', path: '/inicio' },
    { label: 'Menú', path: '/menu' }
  ];
}