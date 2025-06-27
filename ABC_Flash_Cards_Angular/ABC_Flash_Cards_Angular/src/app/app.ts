import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';

interface FlashCard {
  letter: string;
  word: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
})
export class AppComponent {
  title = 'Flash Cards';
  menu = [
    { label: 'English ABC', value: 'en' },
    { label: 'Arabic Letters', value: 'ar' }
  ];
  selectedSet = 'en';
  cardsEn: FlashCard[] = [
    { letter: 'A', word: 'Apple', image: '🍎' },
    { letter: 'B', word: 'Ball', image: '⚽' },
    { letter: 'C', word: 'Cat', image: '🐱' },
    { letter: 'D', word: 'Dog', image: '🐶' },
    { letter: 'E', word: 'Elephant', image: '🐘' },
    { letter: 'F', word: 'Fish', image: '🐟' },
    { letter: 'G', word: 'Giraffe', image: '🦒' },
    { letter: 'H', word: 'Hat', image: '🎩' },
    { letter: 'I', word: 'Ice Cream', image: '🍦' },
    { letter: 'J', word: 'Juice', image: '🧃' },
    { letter: 'K', word: 'Kite', image: '🪁' },
    { letter: 'L', word: 'Lion', image: '🦁' },
    { letter: 'M', word: 'Monkey', image: '🐵' },
    { letter: 'N', word: 'Nest', image: '🪺' },
    { letter: 'O', word: 'Orange', image: '🍊' },
    { letter: 'P', word: 'Penguin', image: '🐧' },
    { letter: 'Q', word: 'Queen', image: '👸' },
    { letter: 'R', word: 'Rabbit', image: '🐰' },
    { letter: 'S', word: 'Sun', image: '☀️' },
    { letter: 'T', word: 'Tiger', image: '🐯' },
    { letter: 'U', word: 'Umbrella', image: '☂️' },
    { letter: 'V', word: 'Violin', image: '🎻' },
    { letter: 'W', word: 'Whale', image: '🐳' },
    { letter: 'X', word: 'Xylophone', image: '🎶' },
    { letter: 'Y', word: 'Yacht', image: '🛥️' },
    { letter: 'Z', word: 'Zebra', image: '🦓' },
  ];
  cardsAr: FlashCard[] = [
    { letter: 'ا', word: 'أرنب', image: '🐇' },
    { letter: 'ب', word: 'بطة', image: '🦆' },
    { letter: 'ت', word: 'تفاح', image: '🍏' },
    { letter: 'ث', word: 'ثعلب', image: '🦊' },
    { letter: 'ج', word: 'جمل', image: '🐫' },
    { letter: 'ح', word: 'حصان', image: '🐎' },
    { letter: 'خ', word: 'خروف', image: '🐑' },
    { letter: 'د', word: 'ديك', image: '🐓' },
    { letter: 'ذ', word: 'ذئب', image: '🐺' },
    { letter: 'ر', word: 'رمان', image: '🍎' },
    { letter: 'ز', word: 'زرافة', image: '🦒' },
    { letter: 'س', word: 'سمكة', image: '🐟' },
    { letter: 'ش', word: 'شمس', image: '☀️' },
    { letter: 'ص', word: 'صقر', image: '🦅' },
    { letter: 'ض', word: 'ضفدع', image: '🐸' },
    { letter: 'ط', word: 'طاووس', image: '🦚' },
    { letter: 'ظ', word: 'ظبي', image: '🦌' },
    { letter: 'ع', word: 'عصفور', image: '🐦' },
    { letter: 'غ', word: 'غزال', image: '🦌' },
    { letter: 'ف', word: 'فيل', image: '🐘' },
    { letter: 'ق', word: 'قرد', image: '🐒' },
    { letter: 'ك', word: 'كلب', image: '🐶' },
    { letter: 'ل', word: 'لبن', image: '🥛' },
    { letter: 'م', word: 'موز', image: '🍌' },
    { letter: 'ن', word: 'نمر', image: '🐅' },
    { letter: 'هـ', word: 'هدهد', image: '🦉' },
    { letter: 'و', word: 'وردة', image: '🌹' },
    { letter: 'ي', word: 'يمامة', image: '🕊️' },
  ];
  currentIndex = 0;

  get cards() {
    return this.selectedSet === 'en' ? this.cardsEn : this.cardsAr;
  }

  selectSet(set: string) {
    this.selectedSet = set;
    this.currentIndex = 0;
  }

  prevCard() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
  }
  nextCard() {
    this.currentIndex = this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
  }

  get selectedMenuLabel() {
    const selected = this.menu.find(m => m.value === this.selectedSet);
    return selected ? selected.label : '';
  }
  async exportPDF() {
    const cardsPerRow = 3;
    const cardWidth = 130;
    const cardHeight = 230;
    const margin = 5;
    const rowsPerPage = 3;
    const pageWidth = cardsPerRow * cardWidth + (cardsPerRow + 1) * margin;
    const pageHeight = rowsPerPage * cardHeight + (rowsPerPage + 1) * margin;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [pageWidth, pageHeight] });
    for (let i = 0; i < this.cards.length; i += cardsPerRow * rowsPerPage) {
      if (i > 0) pdf.addPage([pageWidth, pageHeight], 'portrait');
      for (let j = 0; j < cardsPerRow * rowsPerPage; j++) {
        const cardIndex = i + j;
        if (cardIndex >= this.cards.length) break;
        const row = Math.floor(j / cardsPerRow);
        const col = j % cardsPerRow;
        const card = document.createElement('div');
        card.className = 'flashcard pdf';
        card.style.width = cardWidth + 'px';
        card.style.height = cardHeight + 'px';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        card.style.background = 'linear-gradient(135deg,rgb(161, 205, 112) 0%, #fff 100%)';
        card.style.borderRadius = '2.5rem';
        card.style.boxShadow = '0 8px 32px rgba(67,97,238,0.18), 0 1.5px 0rgb(238, 224, 67) inset';
        card.style.border = '8px doublergb(238, 224, 67)';
        card.style.outline = '4px solid #b8c0ff';
        card.style.fontFamily = 'Arial, sans-serif';
        card.style.position = 'relative';


        card.innerHTML = `
            <div style="font-size:4rem;font-weight:bold;color:#000;margin-bottom:0.7rem;line-height:1;text-shadow:0 2px 8px #b8c0ff;">${this.cards[cardIndex].letter}</div>
            <div style="font-size:2.5rem;margin-bottom:0.7rem;line-height:1;text-shadow:0 2px 8px #b8c0ff;">${this.cards[cardIndex].image}</div>
            <div style="font-size:1.3rem;color:#333;text-align:center;word-break:break-word;line-height:1.1;background:rgba(255,255,255,0.7);padding:0.2em 0.7em;border-radius:1em;box-shadow:0 1px 4px #b8c0ff;">${this.cards[cardIndex].word}</div>

          `;
        document.body.appendChild(card);
        // eslint-disable-next-line no-await-in-loop
        const canvas = await html2canvas(card, { backgroundColor: '#fff', scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const x = margin + col * (cardWidth + margin);
        const y = margin + row * (cardHeight + margin);
        pdf.addImage(imgData, 'PNG', x, y, cardWidth, cardHeight);
        document.body.removeChild(card);
      }
    }
    pdf.save('ABC-Flash-Cards.pdf');
  }
}
