import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'english',
    loadComponent: () => import('./flash-card/flash-card-page.component').then(m => m.FlashCardPageComponent)
  },
  {
    path: 'arabic',
    loadComponent: () => import('./flash-card/flash-card-page.component').then(m => m.FlashCardPageComponent)
  },
  {
    path: 'numbers',
    loadComponent: () => import('./flash-card/flash-card-page.component').then(m => m.FlashCardPageComponent)
  },
  {
    path: 'bedtime',
    loadComponent: () => import('./bed-time-book/bed-time-book.component').then(m => m.BedTimeBookComponent)
  },
  { path: '**', redirectTo: '' }
];
