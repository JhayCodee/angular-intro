import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="d-flex flex-column align-items-center justify-content-center p-5">
    <h2 class="text-dark mb-4">Counter: {{counter}} </h2>

    <div class="btn-group" role="group" aria-label="Counter controls">
      <button class="btn btn-outline-danger btn-lg" (click)="decreaseBy(3)">-3</button>
      <button class="btn btn-outline-secondary btn-lg" (click)="resetCounter()">Reset</button>
      <button class="btn btn-outline-success btn-lg" (click)="increaseBy(3)">+3</button>
    </div>
  </div>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number) : void {
    this.counter+= value;
  }

  decreaseBy(value: number)  : void {
    this.counter-= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}

