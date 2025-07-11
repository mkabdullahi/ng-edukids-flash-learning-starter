import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [MatDrawerContainer, MatDrawer, MatButtonModule, RouterModule],
  template: `
    <mat-drawer-container>
      <mat-drawer #drawer position="end">
        <nav class="mobile-nav">
          <a mat-button routerLink="/dashboard" (click)="drawer.toggle()">Dashboard</a>
          <a mat-button routerLink="/flash-cards" (click)="drawer.toggle()">Flash Cards</a>
          <a mat-button routerLink="/bedtime-book" (click)="drawer.toggle()">Bedtime Book</a>
        </nav>
      </mat-drawer>
    </mat-drawer-container>
  `,
  styleUrls: ['./mobile-menu.scss']
})
export class MobileMenuComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggle() {
    this.drawer.toggle();
  }
}
