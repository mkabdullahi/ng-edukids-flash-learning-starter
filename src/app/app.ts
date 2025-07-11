import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button [routerLink]="['/']" aria-label="Home" class="toolbar-home-btn">
        <mat-icon>home</mat-icon>
      </button>
      <span class="toolbar-title">
        Kids' Learning Starter
      </span>
      <span class="spacer"></span>
      <ng-container *ngIf="currentRouteLabel">
        <span class="toolbar-section-label">
          {{ currentRouteLabel }}
        </span>
      </ng-container>
    </mat-toolbar>
    <router-outlet></router-outlet>
    <app-mobile-menu></app-mobile-menu>
  `,
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MobileMenuComponent,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [
    // Provide Router services for standalone bootstrap
  ]
})
export class AppComponent {
  @ViewChild(MobileMenuComponent) mobileMenu!: MobileMenuComponent;

  currentRouteLabel = '';
  private router = inject(Router);
  private routeMap: Record<string, string> = {
    '/english': 'English ABC',
    '/arabic': 'Arabic Letters',
    '/numbers': 'Numbers',
    '/bedtime': 'Bed Time Book',
    '/': ''
  };
  constructor() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.currentRouteLabel = this.routeMap[e.urlAfterRedirects] || '';
    });
  }

  toggleMobileMenu() {
    this.mobileMenu.toggle();
  }
}
