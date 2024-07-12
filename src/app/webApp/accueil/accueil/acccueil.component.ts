import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    // comp, directives, pipes
    HeaderComponent,
    HomeComponent,
    FooterComponent,
   
    // module complet
    // RouterModule

     // features
    RouterOutlet
  
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
