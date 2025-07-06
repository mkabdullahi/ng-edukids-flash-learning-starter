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
    { label: 'English ABC', route: '/english', icon: 'language', color: '#b8c0ff' },
    { label: 'Arabic Letters', route: '/arabic', icon: 'translate', color: '#ffd6a5' },
    { label: 'Numbers', route: '/numbers', icon: 'looks_3', color: '#b5ead7' },
    { label: 'Bed Time Book', route: '/bedtime', icon: 'hotel', color: '#f7b2ad' },
  ];
}
