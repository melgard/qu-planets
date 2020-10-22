import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-letter',
  templateUrl: './first-letter.component.html',
  styleUrls: ['./first-letter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstLetterComponent implements OnInit {

  @Input() word: string;

  constructor() { }

  ngOnInit(): void {
  }

  get letter() {
    return  (this.word) ? this.word.substring(0, 1) : '';
  }

  get color() {
    const letters = 'CDEDCDEFCDEDCDED';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
