import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'about-me',
    title: 'About Me',
    loadComponent: () => import('./home/pages/about-me/about-me.component'),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./home/pages/contact/contact.component'),
  },
  {
    path: 'summary',
    title: 'Summary',
    loadComponent: () => import('./home/pages/summary/summary.component')
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadComponent: () => import('./home/pages/portfolio/portfolio.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
