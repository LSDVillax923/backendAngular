import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

interface SocialLink {
  href: string;
  icon: string;
  title: string;
  alt: string;
}

interface FooterLink {
  label: string;
  routerLink?: string;
  fragment?: string;
  href?: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
   private readonly currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  });

  readonly comidas: MenuItem[] = [
    {
      id: 1,
      nombre: 'Ceviche de camarón',
      descripcion:
        'Camarones marinados en cítricos con mango, ají dulce y toques de cilantro fresco.',
      precio: 55000,
      imagenUrl: '/images/platos/ceviche.png'
    },
    {
      id: 2,
      nombre: 'Arroz chaufa',
      descripcion: 'Salteado de arroz con verduras crocantes, pollo marinado y un toque de soya.',
      precio: 48000,
      imagenUrl: '/images/platos/arrozChaufa.jpeg'
    },
    {
      id: 3,
      nombre: 'Pad thai de langostinos',
      descripcion: 'Fideos de arroz con langostinos, tamarindo y maní tostado.',
      precio: 62000,
      imagenUrl: '/images/platos/padThai.jpeg'
    },
    {
      id: 4,
      nombre: 'Ensalada mediterránea',
      descripcion: 'Mezcla de hojas verdes, queso feta, aceitunas kalamata y vinagreta de hierbas.',
      precio: 42000,
      imagenUrl: '/images/platos/ensaladaMediterranea.jpeg'
    },
    {
      id: 5,
      nombre: 'Hamburguesa soberbia',
      descripcion: 'Carne angus, cebollas caramelizadas, queso maduro y alioli de la casa.',
      precio: 58000,
      imagenUrl: '/images/platos/hamburguesa.png'
    },
    {
      id: 6,
      nombre: 'Brownie de chocolate',
      descripcion: 'Brownie tibio con helado de vainilla y salsa de caramelo salado.',
      precio: 28000,
      imagenUrl: '/images/platos/brownie.jpeg'
    }
  ];

  readonly socialLinks: SocialLink[] = [
    {
      href: 'https://www.instagram.com/soberbio.bistro/',
      icon: '/images/logos/instagramOscuro.svg',
      title: 'Instagram',
      alt: 'Instagram'
    },
    {
      href: 'https://wa.me/573155095645',
      icon: '/images/logos/whatsappOscuro.svg',
      title: 'WhatsApp',
      alt: 'WhatsApp'
    },
    {
      href: 'https://www.facebook.com/soberbio.bistro',
      icon: '/images/logos/facebookOscuro.svg',
      title: 'Facebook',
      alt: 'Facebook'
    }
  ];

  readonly footerLinks: FooterLink[] = [
    { label: 'Nosotros', routerLink: '/inicio', fragment: 'nosotros' },
    { label: 'Acerca de', routerLink: '/inicio', fragment: 'acerca' },
    { label: 'El Chef', routerLink: '/inicio', fragment: 'chef' },
    { label: 'Awards', routerLink: '/inicio', fragment: 'awards' },
    { label: 'Contacto', routerLink: '/inicio', fragment: 'contacto' },
    { label: 'Prensa', routerLink: '/inicio', fragment: 'prensa' },
    { label: 'Galería', href: 'https://www.instagram.com/soberbio.bistro/' }
  ];
   trackByComidaId(_: number, comida: MenuItem): number {
    return comida.id;
  }

  formatPrice(precio: number): string {
    return this.currencyFormatter.format(precio);
  }
}