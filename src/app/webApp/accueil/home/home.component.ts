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
  public infos$: Observable<string> = {} as Observable<string>;
  @ViewChild('cours') eltUl!: ElementRef<HTMLElement>;

  ngOnInit(): void {
        const array: string[] = ['Angular 18', 'React 18', 'Vue', 'NextJS', 'Vite'];
    
  }

  ngAfterViewInit(): void {

  }
}
