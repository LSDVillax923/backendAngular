import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

interface FooterLink {
  label: string;
  routerLink?: string[];
  fragment?: string;
  href?: string;
}

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf],
  templateUrl: './sign-in.html',
  styleUrls: ['../login/login.css', './sign-in.css'],
})
export class SignIn {
  readonly footerLinks: FooterLink[] = [
    { label: 'Nosotros', routerLink: ['/inicio'], fragment: 'nosotros' },
    { label: 'Acerca de', routerLink: ['/inicio'], fragment: 'acerca' },
    { label: 'El Chef', routerLink: ['/inicio'], fragment: 'chef' },
    { label: 'Awards', routerLink: ['/inicio'], fragment: 'awards' },
    { label: 'Contacto', routerLink: ['/inicio'], fragment: 'contacto' },
    { label: 'Prensa', routerLink: ['/inicio'], fragment: 'prensa' },
    { label: 'Galería', href: 'https://www.instagram.com/soberbio.bistro/' },
  ];

  readonly socialLinks: SocialLink[] = [
    {
      href: 'https://www.instagram.com/soberbio.bistro/',
      icon: '/images/logos/instagram.png',
      alt: 'Instagram',
    },
    {
      href: 'https://wa.me/573155095645',
      icon: '/images/logos/whatsapp.png',
      alt: 'WhatsApp',
    },
    {
      href: 'https://www.facebook.com/soberbio.bistro',
      icon: '/images/logos/facebook.png',
      alt: 'Facebook',
    },
    {
      href: 'https://apps.apple.com/es/app/facetime/id1110145091',
      icon: '/images/logos/phone.png',
      alt: 'Teléfono',
    },
    {
      href: 'https://www.google.com/maps/place/SOBERBIO/',
      icon: '/images/logos/location.png',
      alt: 'Ubicación en Google Maps',
    },
  ];

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}