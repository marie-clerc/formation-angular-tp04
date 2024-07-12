import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dives } from '../../../../shared/class/dives';
import { DivesListChild2Component } from '../dives-list-child2/dives-list-child2.component';
import { VoirPlusPipe } from '../../../../shared/pipes/voir-plus.pipe';

@Component({
  selector: 'app-dives-list-child1',
  templateUrl: './dives-list-child1.component.html',
  styleUrl: './dives-list-child1.component.scss',
  standalone:true,
  imports:[ 
    DivesListChild2Component,
    // le pipe de see more
    VoirPlusPipe,
  ]
})
export class DivesListChild1Component {
  // définition des Inputs comme une prop
  // les @input et les @output permettent d'établir la communication entre comp parents et enfant(s)
  // ils se définissent toujours dans l'enfant ! 
  @Input() inputDive!:Dives;
  @Input() infos!:string;

  @Output() outputEventDive:EventEmitter<any> = new EventEmitter();


  public choixDive = (e:any) => {
    // console.log(e, e.target, e.target.checked);   
    console.log(this.inputDive, e.target.checked);
    // ---
    this.outputEventDive.emit({
      paramIsChecked:e.target.checked, // paramIsChecked:true | false
      paramDive:this.inputDive, // {id:1, name:...}
      paramIdDive:this.inputDive.id
    })
     
  }

}
