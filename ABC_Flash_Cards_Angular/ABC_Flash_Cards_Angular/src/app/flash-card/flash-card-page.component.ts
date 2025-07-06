import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlashCardComponent } from './flash-card.component';
import { ENGLISH_FLASH_CARDS, ARABIC_FLASH_CARDS, NUMBER_FLASH_CARDS, FlashCard } from './flash-card.model';

@Component({
  selector: 'app-flash-card-page',
  templateUrl: './flash-card-page.component.html',
  styleUrls: ['./flash-card-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, FlashCardComponent]
})
export class FlashCardPageComponent {
  cards: FlashCard[] = [];
  currentIndex = 0;
  set = '';

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(segments => {
      const path = segments[0]?.path;
      this.set = path;
      switch (path) {
        case 'english':
          this.cards = ENGLISH_FLASH_CARDS;
          break;
        case 'arabic':
          this.cards = ARABIC_FLASH_CARDS;
          break;
        case 'numbers':
          this.cards = NUMBER_FLASH_CARDS;
          break;
        default:
          this.cards = [];
      }
    });
  }

  prevCard() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
  }
  nextCard() {
    this.currentIndex = this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
  }
}
