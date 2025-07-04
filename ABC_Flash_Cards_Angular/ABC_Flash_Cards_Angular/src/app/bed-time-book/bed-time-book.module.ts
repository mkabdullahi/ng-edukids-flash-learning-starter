import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BedTimeBookComponent } from './bed-time-book.component';

@NgModule({
  declarations: [BedTimeBookComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [BedTimeBookComponent]
})
export class BedTimeBookModule {}
