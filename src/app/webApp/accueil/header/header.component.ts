import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
    // RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _location: Location){

  }

  public goBack = () => {
    this._location.back()
}

}
