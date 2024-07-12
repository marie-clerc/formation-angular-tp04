import { Component } from '@angular/core';

@Component({
    selector: 'app-page404',
    template: `
  <h5 class='alert alert-danger'>La page n'existe pas !</h5>
  `,
    styles: `
      h5 {
        color:#FFF;
      }
  `
})
export class Page404Component {

}
