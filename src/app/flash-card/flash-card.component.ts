import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrl: './flash-card.component.scss',
  standalone: true,
})
export class FlashCardComponent {
  @Input() letter = '';
  @Input() image = '';
  @Input() word = '';
}
