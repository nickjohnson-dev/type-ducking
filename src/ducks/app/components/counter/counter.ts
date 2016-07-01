import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button
      (click)="increment.emit()">
      Increment
    </button>
    <div>
      {{value}}
    </div>
    <button
      (click)="decrement.emit()">
      Decrement
    </button>
  `,
})
export class Counter {
  @Input() value;
  @Output() decrement = new EventEmitter();
  @Output() increment = new EventEmitter();
}
