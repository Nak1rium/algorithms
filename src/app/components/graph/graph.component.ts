import { Component } from '@angular/core';
import { shuffle } from '../../helpers/shuffle';
import { quickSort } from '../../helpers/quickSort';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  sticks: number[] = [
    310, 80, 250, 190, 120, 60, 410, 10, 200,
    340, 370, 440, 420, 350, 130, 180, 90, 480,
    360, 150, 40, 300, 220, 140, 70, 280, 500,
    330, 490, 110, 270, 450, 430, 210, 260, 290,
    160, 230, 320, 50, 240, 390, 30, 460, 380,
    100, 170, 20, 400, 470
  ];

  quickSort() {
    quickSort(this.sticks,0, this.sticks.length - 1);
  }


  async bubbleSort() {
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    for (let n = 0; n < this.sticks.length; n++) {
      for (let i = 0; i < this.sticks.length - 1 - n; i++) {
        if (this.sticks[i] > this.sticks[i + 1]) {
          const x = this.sticks[i];
          this.sticks[i] = this.sticks[i + 1];
          this.sticks[i + 1] = x;
        }
        await timer(10);
      }
    }
  }

  async insertionSort() {
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    for (let i = 1; i < this.sticks.length; i++) {
      for (let j = i; j && this.sticks[j - 1] > this.sticks[j]; j--) {
        [this.sticks[j], this.sticks[j - 1]] = [this.sticks[j - 1], this.sticks[j]];
      }
      await timer(40)
    }
  }

  reset() {
    this.sticks = shuffle(this.sticks);
  }

}
