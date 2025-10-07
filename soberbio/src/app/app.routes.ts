import { Routes } from '@angular/router';
 
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio').then((m) => m.Inicio)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu/menu').then((m) => m.Menu)
  },
  { path: '**', redirectTo: 'inicio' }
];