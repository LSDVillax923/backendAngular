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
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito').then((m) => m.Carrito)
  },
  {
    path: 'sing-in',
    loadComponent: () => import('./sing-in/sing-in').then((m) => m.SingIn)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login)
  },
  
  { path: '**', redirectTo: 'inicio' }
];