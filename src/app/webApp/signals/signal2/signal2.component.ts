import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-signal2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal2.component.html',
  styleUrl: './signal2.component.scss'
})
export class Signal2Component {
  public nb1:WritableSignal<string> = signal('');
  public nb2:WritableSignal<string> = signal('');
  public total = signal(0)

  result = computed(
      () => {
          console.log(typeof(parseInt(this.nb1()),0));        
          return parseInt(this.nb1(),0) + parseInt(this.nb2(),0)
      }
  )
}
