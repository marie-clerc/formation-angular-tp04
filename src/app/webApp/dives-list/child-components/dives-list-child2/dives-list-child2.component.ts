import { Component, Input } from '@angular/core';
import { Dives } from '../../../../shared/class/dives';

@Component({
  selector: 'app-dives-list-child2',
  templateUrl: './dives-list-child2.component.html',
  styleUrl: './dives-list-child2.component.scss',
  standalone:true
})
export class DivesListChild2Component {
  @Input() inputDive2!:Dives;
}
