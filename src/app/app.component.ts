import { Component } from '@angular/core';
import { AccueilComponent } from './webApp/accueil/accueil/acccueil.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AccueilComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'TU';
}
