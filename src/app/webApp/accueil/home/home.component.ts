import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, concatMap, delay, from, fromEvent, map, of, scan, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  // public infos$:Observable<string> = new Observable();
  // meme chose, mais synthaxe différente
  public infos$: Observable<string> = {} as Observable<string>;


  @ViewChild('cours') eltUl!: ElementRef<HTMLElement>;
  // props
  @ViewChild('plus') eltPlus!: ElementRef<HTMLElement>;
  @ViewChild('moins') eltMoins!: ElementRef<HTMLElement>;
  @ViewChild('panier') eltPanier!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    const array: string[] = ['Angular 18', 'React 18', 'Vue', 'NextJS', 'Vite'];
    // (array) on recupère un Obs
    this.infos$ = from(array)
    .pipe(
      delay(1500),
      tap(
        (formation:string) => {
          console.log(formation);

        }
      )
    );

    // this.infos$ = from(array)
    //   .pipe(
    //     concatMap(
    //       // of envoie les formation les une apres les autres, mais 
    //       // est aussi un Obs
    //       formation => of(formation)
    //         .pipe(
    //           delay(1000)
    //         )
    //     ),
    //     tap(
    //       (formation: string) => {
    //         console.log(formation);
    //       }
    //     )
    //   );
  }

  ngAfterViewInit(): void {

    // --------------------
    // creation de l'Observable #1 : btn PLUS
    // --------------------
    const plus$ = fromEvent(this.eltPlus.nativeElement, 'click')
    .pipe(
      startWith(0),
      // permet de transformer les data
      map(
        () => {
          return +1
        }
      ), 
      // maintenant on veut cumuler les valeurs
      scan(
        (accu:number, newval:number) => {
          return accu + newval
        }
      )
    )
    .subscribe(
      (valObs) => {
        console.log(valObs);
        this.eltPanier.nativeElement.innerHTML=`${valObs} article(s) en panier`
      }
    )

    // -------------------------------------
    // le button MOINS
    
    const moins$ = fromEvent(this.eltMoins.nativeElement, 'click')
    .pipe(
      startWith(0),
      // permet de transformer les data
      map(
        () => {
          return -1
        }
      ), 
      // maintenant on veut cumuler les valeurs
      scan(
        (accu:number, newval:number) => {
          return accu + newval
        }
      )
    )
    .subscribe(
      (valObs) => {
        console.log(valObs);
        this.eltPanier.nativeElement.innerHTML=`${valObs} article(s) en panier`
      }
    )
  }
}
