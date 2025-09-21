import { Component, signal } from '@angular/core';
import { interval } from 'rxjs';
import { SpecialInput } from './components/specialInput/SpecialInput';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
//  templateUrl: './app.html',
  template:`
    <main class="main">
  <h1>{{num}}</h1>
  <button (click)="Increment()">increment</button>
  <button (click)="Decrement()">decrement</button>
  <button (click)="Reset()">reset</button>
  <button (click)="AutoIncrement()">AutoIncrement</button>
  <br><br>
  <h3>{{age()}}</h3>
  @if(age() % 3 === 0)
  {
    <special-input [name]="'x'"/>
  }
  @else {
    <special-input [name]="'x'"/>
  }
    <div *ngFor="let user of users">
      {{user}}
    </div>
  @defer(on hover) {
    <special-input [name]="'good'"/>
  }  @placeholder(minimum 1s) {
    <h5>Still not in loading process</h5>
  } @loading (minimum 1s) {
    <h5>Being in loading process</h5>
  } @error {
    <h5>while loading error occurred</h5>
  }
  </main>
  `,
  styleUrl: './app.scss',
  imports: [SpecialInput, NgFor]
})
export class App {
  title = 'my-angular-app';
  num: number = 0;
  age = signal(0);
  users:string[] = ["Justin Nail", "Harry Potter", "Auskar Rubic"];
  Increment () : void {
    this.num ++;
    console.log(this.num)
  }
  Decrement () : void {
    this.num --;
    console.log(this.num)
  }
  Reset () : void {
    this.num = 0;
    console.log(this.num)
    console.log(this.age)
  }
  AutoIncrement () : void {
    interval(1000).subscribe((num) => {
      this.age.update(val => val + 1)
      console.log(this.num)
    });
  }
}
