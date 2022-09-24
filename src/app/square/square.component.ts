import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button>{{ myValue }}</button> `,
  styles: [],
})
export class SquareComponent {
  @Input() myValue: 'O' | 'X' | undefined;
}
