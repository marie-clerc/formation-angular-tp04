import { Component } from '@angular/core';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-compte-client',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    //  features
    RouterOutlet, RouterLink
    // RouterModule
  ],
  templateUrl: './compte-client.component.html',
  styleUrl: './compte-client.component.scss'
})
export class EntryCompteClientComponent {

}
