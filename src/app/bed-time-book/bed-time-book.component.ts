
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface BedTimeBookPage {
  title: string;
  text: string;
  image: string;
  isCover?: boolean;
}

@Component({
  selector: 'app-bed-time-book',
  templateUrl: './bed-time-book.component.html',
  styleUrls: ['./bed-time-book.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule]
})
export class BedTimeBookComponent {
  pages: BedTimeBookPage[] = [
    {
      title: "Kids' Bedtime Adventure",
      text: 'A magical storybook for sweet dreams. Tap next to begin your adventure!',
      image: 'assets/bedtime/cover.png',
      isCover: true
    },
    {
      title: 'Good Night, Moon',
      text: 'The moon shines bright, lighting up the night. Time to snuggle in bed and say good night.',
      image: 'assets/bedtime/moon.png'
    },
    {
      title: 'Sleepy Stars',
      text: 'Twinkling stars watch over you as you drift into dreamland.',
      image: 'assets/bedtime/stars.png'
    },
    {
      title: 'Teddy Bear Hugs',
      text: 'Your teddy bear is here to give you a warm, cozy hug.',
      image: 'assets/bedtime/teddy.png'
    },
    {
      title: 'Soft Pillow',
      text: 'Lay your head on your soft pillow and close your eyes.',
      image: 'assets/bedtime/pillow.png'
    },
    {
      title: 'Dreamy Clouds',
      text: 'Fluffy clouds float by, carrying sweet dreams to you.',
      image: 'assets/bedtime/clouds.png'
    },
    {
      title: 'Gentle Breeze',
      text: 'A gentle breeze whispers a lullaby as you fall asleep.',
      image: 'assets/bedtime/breeze.png'
    },
    {
      title: 'Cuddly Blanket',
      text: 'Wrap up in your cuddly blanket and feel safe and warm.',
      image: 'assets/bedtime/blanket.png'
    },
    {
      title: 'Sleepy Kitten',
      text: 'A sleepy kitten purrs softly, ready for bed too.',
      image: 'assets/bedtime/kitten.png'
    },
    {
      title: 'Quiet Room',
      text: 'The room is quiet and calm, perfect for sleeping.',
      image: 'assets/bedtime/room.png'
    },
    {
      title: 'Nighttime Song',
      text: 'A sweet song fills the air, helping you relax.',
      image: 'assets/bedtime/song.png'
    },
    {
      title: 'Magic Dreams',
      text: 'Magic dreams are waiting for you tonight.',
      image: 'assets/bedtime/dreams.png'
    },
    {
      title: 'Sleepy Owl',
      text: 'A wise old owl blinks slowly, ready to sleep.',
      image: 'assets/bedtime/owl.png'
    },
    {
      title: 'Goodnight Hugs',
      text: 'Hugs and kisses from loved ones make bedtime special.',
      image: 'assets/bedtime/hugs.png'
    },
    {
      title: 'Peaceful Night',
      text: 'The world is peaceful and still. Rest well, little one.',
      image: 'assets/bedtime/peaceful.png'
    },
    {
      title: 'Morning Awaits',
      text: 'Sleep tight, morning will come with new adventures.',
      image: 'assets/bedtime/morning.png'
    },
    // Add more creative pages to reach 20
    {
      title: 'Rainbow Dreams',
      text: 'Rainbows fill your dreams with color and joy.',
      image: 'assets/bedtime/rainbow.png'
    },
    {
      title: 'Friendly Fireflies',
      text: 'Fireflies dance in the night, lighting your way to dreamland.',
      image: 'assets/bedtime/fireflies.png'
    },
    {
      title: 'Snuggly Puppy',
      text: 'A puppy curls up at your feet, ready to sleep too.',
      image: 'assets/bedtime/puppy.png'
    },
    {
      title: 'Starry Blanket',
      text: 'A blanket of stars covers you as you rest.',
      image: 'assets/bedtime/starblanket.png'
    },
    {
      title: 'Sweet Dreams',
      text: 'Close your eyes and drift into sweet dreams. Good night!',
      image: 'assets/bedtime/sweetdreams.png'
    },
    {
      title: 'The End',
      text: 'Thank you for reading! Sleep well and have wonderful dreams. Good night!',
      image: 'assets/bedtime/backcover.png',
      isCover: true // Use isCover to style as a back cover if needed
    }
  ];

  currentPage = 0;
  doublePageMode = true;

  get isCover() {
    return this.currentPage === 0;
  }

  get leftPageIndex() {
    // After cover, left page is always odd index
    return this.currentPage;
  }

  get rightPageIndex() {
    return this.currentPage + 1;
  }

  nextPage() {
    if (this.isCover) {
      this.currentPage = 1;
    } else if (this.doublePageMode) {
      if (this.currentPage + 2 < this.pages.length) {
        this.currentPage += 2;
      } else if (this.currentPage + 1 < this.pages.length) {
        this.currentPage += 1;
      }
    } else {
      if (this.currentPage + 1 < this.pages.length) {
        this.currentPage += 1;
      }
    }
  }

  prevPage() {
    if (this.isCover) {
      return;
    }
    if (this.doublePageMode) {
      if (this.currentPage - 2 >= 1) {
        this.currentPage -= 2;
      } else {
        this.currentPage = 0;
      }
    } else {
      if (this.currentPage - 1 >= 1) {
        this.currentPage -= 1;
      } else {
        this.currentPage = 0;
      }
    }
  }

  togglePageMode() {
    this.doublePageMode = !this.doublePageMode;
    // Adjust currentPage to be valid for the new mode
    if (this.doublePageMode && this.currentPage === 0) {
      // Stay on cover
      return;
    }
    if (this.doublePageMode && this.currentPage % 2 === 0 && this.currentPage !== 0) {
      // Always start left page on odd index after cover
      this.currentPage = this.currentPage;
    } else if (this.doublePageMode && this.currentPage % 2 === 1) {
      this.currentPage = this.currentPage - 1;
    }
  }
}
