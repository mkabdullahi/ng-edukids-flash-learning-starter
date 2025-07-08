import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class DashboardComponent {
  tiles = [
    { label: 'English Letters', route: '/english', iconSymbol: 'ABC', color: '#b8c0ff' },
    { label: 'Arabic Letters', route: '/arabic', iconSymbol: 'ت\u200Cب\u200Cا', color: '#ffd6a5' },
    { label: 'Numbers', route: '/numbers', iconSymbol: '123', color: '#b5ead7' },
    { label: 'Bed Time Book', route: '/bedtime', iconSymbol: ' ', color: '#f7b2ad' },
  ];
}
