import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FlashCard, ENGLISH_FLASH_CARDS, ARABIC_FLASH_CARDS, NUMBER_FLASH_CARDS } from './flash-card/flash-card.model';
import { BedTimeBookComponent } from './bed-time-book/bed-time-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlashCardComponent,
    BedTimeBookComponent
  ],

})
export class AppComponent {
  title = 'Flash Cards';
  tiles = [
    { label: 'English ABC', value: 'en', icon: 'language', color: '#b8c0ff' },
    { label: 'Arabic Letters', value: 'ar', icon: 'translate', color: '#ffd6a5' },
    { label: 'Numbers', value: 'number', icon: 'looks_3', color: '#b5ead7' },
    { label: 'Bed Time Book', value: 'bedtime', icon: 'hotel', color: '#f7b2ad' },
  ];
  selectedSet: string|null = null;
  cardsEn: FlashCard[] = ENGLISH_FLASH_CARDS;
  cardsAr: FlashCard[] = ARABIC_FLASH_CARDS;
  cardsNum: FlashCard[] = NUMBER_FLASH_CARDS;
  currentIndex = 0;

  get cards() {
    switch (this.selectedSet) {
      case 'en':
        return this.cardsEn;
      case 'ar':
        return this.cardsAr;
      case 'number':
        return this.cardsNum;
      default:
        return [];
    }
  }

  get showBedTimeBook() {
    return this.selectedSet === 'bedtime';
  }

  get showDashboard() {
    return this.selectedSet === null;
  }

  selectSet(set: string) {
    this.selectedSet = set;
    this.currentIndex = 0;
  }

  goHome() {
    this.selectedSet = null;
    this.currentIndex = 0;
  }


  prevCard() {
    if (this.showBedTimeBook) return;
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
  }
  nextCard() {
    if (this.showBedTimeBook) return;
    this.currentIndex = this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
  }

  get selectedMenuLabel() {
    const selected = this.tiles.find(m => m.value === this.selectedSet);
    return selected ? selected.label : '';
  }
  async exportPDF() {
    if (this.showBedTimeBook) return; // PDF export not supported for bedtime book
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

        let imageHtml = '';
        if (this.selectedSet === 'number') {
          const num = Number(this.cards[cardIndex].letter);
          if (!isNaN(num) && num > 0) {
            // Show up to 3 images per row, wrap to next line after 3
            const perRow = 3;
            let rows: string[] = [];
            let count = 0;
            while (count < num) {
              let rowImages = '';
              for (let k = 0; k < perRow && count < num; k++, count++) {
                rowImages += `<span style="font-size:2.5rem;margin:0 0.2rem;">${this.cards[cardIndex].image}</span>`;
              }
              rows.push(`<div style="display:flex;justify-content:center;margin-bottom:0.2rem;">${rowImages}</div>`);
            }
            imageHtml = rows.join('');
          } else {
            imageHtml = `<div style="font-size:2.5rem;margin-bottom:0.7rem;line-height:1;text-shadow:0 2px 8px #b8c0ff;">${this.cards[cardIndex].image}</div>`;
          }
        } else {
          imageHtml = `<div style="font-size:2.5rem;margin-bottom:0.7rem;line-height:1;text-shadow:0 2px 8px #b8c0ff;">${this.cards[cardIndex].image}</div>`;
        }

        card.innerHTML = `
            <div style="font-size:4rem;font-weight:bold;color:#000;margin-bottom:0.7rem;line-height:1;text-shadow:0 2px 8px #b8c0ff;">${this.cards[cardIndex].letter}</div>
            <div>${imageHtml}</div>
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
