import { Component } from '@angular/core';

interface BedTimeBookPage {
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-bed-time-book',
  templateUrl: './bed-time-book.component.html',
  styleUrls: ['./bed-time-book.component.scss']
})
export class BedTimeBookComponent {
  pages: BedTimeBookPage[] = [
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
    }
  ];

  currentPage = 0;

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
