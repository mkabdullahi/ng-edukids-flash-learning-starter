import { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

const ABC_DATA = [
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

function FlashCard({ letter, word, image }) {
  return (
    <div className="flashcard" tabIndex={0} aria-label={`${letter} for ${word}`}> 
      <div className="flashcard-letter">{letter}</div>
      <div className="flashcard-image" aria-hidden="true">{image}</div>
      <div className="flashcard-word">{word}</div>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const cardsRef = useRef();

  const prevCard = () => setIndex((i) => (i > 0 ? i - 1 : ABC_DATA.length - 1));
  const nextCard = () => setIndex((i) => (i < ABC_DATA.length - 1 ? i + 1 : 0));

  // Export PDF with 3 cards per row, multiple rows per page
  const exportPDF = async () => {
    const cardsPerRow = 3;
    const cardWidth = 180;
    const cardHeight = 220;
    const margin = 20;
    const rowsPerPage = 3;
    const pageWidth = cardsPerRow * cardWidth + (cardsPerRow + 1) * margin;
    const pageHeight = rowsPerPage * cardHeight + (rowsPerPage + 1) * margin;
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [pageWidth, pageHeight] });
    for (let i = 0; i < ABC_DATA.length; i += cardsPerRow * rowsPerPage) {
      if (i > 0) pdf.addPage([pageWidth, pageHeight], 'landscape');
      for (let j = 0; j < cardsPerRow * rowsPerPage; j++) {
        const cardIndex = i + j;
        if (cardIndex >= ABC_DATA.length) break;
        const row = Math.floor(j / cardsPerRow);
        const col = j % cardsPerRow;
        const card = document.createElement('div');
        card.className = 'flashcard pdf';
        card.style.width = cardWidth + 'px';
        card.style.height = cardHeight + 'px';
        card.innerHTML = `
          <div class='flashcard-letter'>${ABC_DATA[cardIndex].letter}</div>
          <div class='flashcard-image'>${ABC_DATA[cardIndex].image}</div>
          <div class='flashcard-word'>${ABC_DATA[cardIndex].word}</div>
        `;
        document.body.appendChild(card);
        // Wait for DOM to render
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
  };

  return (
    <main>
      <h1>ABC Flash Cards</h1>
      <div className="flashcard-container" ref={cardsRef}>
        <FlashCard {...ABC_DATA[index]} />
      </div>
      <div className="controls">
        <button onClick={prevCard} aria-label="Previous card">◀</button>
        <span className="card-index">{index + 1} / {ABC_DATA.length}</span>
        <button onClick={nextCard} aria-label="Next card">▶</button>
      </div>
      <button className="export-btn" onClick={exportPDF} aria-label="Export all cards as PDF">
        Export All as PDF
      </button>
    </main>
  );
}

export default App;
