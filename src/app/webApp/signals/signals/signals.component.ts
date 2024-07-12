import { Component, ElementRef, ViewChild, computed, effect, signal } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { NewsNg1718Component } from '../news-ng-17-18/news-ng-17-18.component';
import { Signal2Component } from '../signal2/signal2.component';


@Component({
  selector: 'app-entry-signals',
  standalone: true,
  imports: [
    NewsNg1718Component, Signal2Component
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
   //  1- propriétés
   // etoile contour
   public img1: string = 'images/star-contour.png';
   // etoile pleine
   public img2: string = 'images/star-plein.png';
   public nbStars: number[] = [1, 2, 3, 4, 5];
 
   //signal init
   public signalNb = signal(3);

   // computed = possible de transformer la value
   public infos = computed(
    () => `${this.signalNb() *4 } /20  étoiles attribuée(s) !`)

   //viewChildren
   @ViewChild('plus') eltPlus!: ElementRef<HTMLElement>;
   @ViewChild('moins') eltMoins!: ElementRef<HTMLElement>;
 

   constructor(){
    effect(
      // avertisseur : témoin batterie tél
      () => {
        console.log('Effect', this.signalNb());
        if (this.signalNb() >5 ) {
          this.signalNb.set(5); }        
      },{ allowSignalWrites: true }
    )
   }
   ngAfterViewInit() {
     // --------------------------
     fromEvent(this.eltPlus.nativeElement, 'click').pipe(       
         tap( () => { this.signalNb.update( (valSignal) => valSignal + 1 )} )       
       ).subscribe()
       // --------------------------
     fromEvent(this.eltMoins.nativeElement, 'click').pipe(       
       tap( () => { this.signalNb.update( (valSignal) => valSignal - 1 ) } )       
     ).subscribe()
     }

}
