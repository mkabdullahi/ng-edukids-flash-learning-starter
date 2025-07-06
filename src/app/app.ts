import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


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
  `,
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, CommonModule],
  providers: [
    // Provide Router services for standalone bootstrap
  ]
})
export class AppComponent {
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
}
