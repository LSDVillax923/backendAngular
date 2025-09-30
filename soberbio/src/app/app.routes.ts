import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Menu } from './menu/menu/menu';  

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'menu', component: Menu },
  { path: '**', redirectTo: 'inicio' }
];
