import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, HostListener, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

interface AppNavigationLink {
  readonly label: string;
  readonly commands: string | any[];
  readonly fragment?: string;
  readonly activeOptions: { exact: boolean };
}



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, NgIf],
})
export class App {
  readonly title = 'soberbio';
  readonly currentYear = new Date().getFullYear();
  readonly mainLinks: readonly AppNavigationLink[] = [
    { label: 'Inicio', commands: ['/inicio'], activeOptions: { exact: true } },
    { label: 'Menú', commands: ['/menu'], activeOptions: { exact: false } },
    { label: 'Carrito', commands: ['/carrito'], activeOptions: { exact: true } },
    { label: 'Iniciar sesión', commands: ['/login'], activeOptions: { exact: true } },
    { label: 'Registrarse', commands: ['/sign-in'], activeOptions: { exact: true } },

  ];
  readonly supportingLinks: readonly AppNavigationLink[] = [
    { label: 'Nosotros', commands: ['/inicio'], fragment: 'nosotros', activeOptions: { exact: false } },
    { label: 'Contacto', commands: ['/inicio'], fragment: 'contacto', activeOptions: { exact: false } },
  ];
  readonly drawerLinks: readonly AppNavigationLink[] = [...this.mainLinks, ...this.supportingLinks];

  menuOpen = false;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.menuOpen = false;
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  trackByNavLabel(_index: number, link: AppNavigationLink): string {
    return link.label;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeMenu();
  }
}




