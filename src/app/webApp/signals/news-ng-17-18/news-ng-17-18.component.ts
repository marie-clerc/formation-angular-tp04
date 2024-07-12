import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-news-ng-17-18',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './news-ng-17-18.component.html',
  styleUrl: './news-ng-17-18.component.scss'
})
export class NewsNg1718Component {

  // props
  public codeCours: string = '';
  public result: string = '';
  public flag: boolean = false;

  // methods
  public methodClic() {
    if (!this.flag) {
      this.flag = true;
      this.result = 'Vous avez cliqué !';
    } else {
      this.flag = false;
      this.result = '';
    }
  }

}
