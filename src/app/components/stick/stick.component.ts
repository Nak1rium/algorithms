import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.css']
})
export class StickComponent {

  @Input()
  stick: number;

}
