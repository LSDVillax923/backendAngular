import { Component } from '@angular/core';
import { Comida } from '../comida';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {

  menu: Comida[] = [
    { id: 2, name: 'Pizza', description: 'Pizza italiana con salsa de tomate y mozzarella', price: 12.50, imageUrl: 'https://example.com/pizza.jpg' },
    { id: 3, name: 'Ensalada César', description: 'Ensalada fresca con pollo a la parrilla y aderezo César', price: 10.00, imageUrl: 'https://example.com/ensalada.jpg' },
    { id: 4, name: 'Tacos', description: 'Tacos mexicanos con carne asada, cebolla y cilantro', price: 9.75, imageUrl: 'https://example.com/tacos.jpg' },
    { id: 5, name: 'Sushi', description: 'Variedad de sushi fresco con salmón, atún y aguacate', price: 15.00, imageUrl: 'https://example.com/sushi.jpg' }
  
  ];

}
