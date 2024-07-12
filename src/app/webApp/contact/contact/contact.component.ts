import { AfterViewInit, Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { PostService } from '../../../shared/services/post.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    // feature ou les libs angular
    ReactiveFormsModule,
    // material design
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {

  // 1- props
  public monForm:FormGroup 

  // 2 - const
  constructor(private _service:PostService){
    this.monForm = new FormGroup({
      // définition de tous les controls de formulaire
      firstName: new FormControl<string | null>(
        // validators par défault
        null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]),
      email: new FormControl<string | null>(
        // validators par défault
        null, [
          // Validators.required,
          // Validators.email,
          // ^:commence par
        // $: finit par
        // [a-z] : toutes les lettres en minuscule de a à z
        // [a-zA-Z0-9] : toutes les lettres min et maj + les chiffres
        // ? : on répéte 0 ou 1 fois
        // + : 1 ou plusieurs fois
        // * : 0 ou plusieurs fois
        // {val min , val max } : pour répéter
          // Validators.pattern('^[a-z0-9._-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
        ]),
      lastName: new FormControl<string | null>(
        // validators par défault
        null),
        adresse: new FormGroup({
          rue: new FormControl<string | null>(null),
          ville: new FormControl<string | null>(null, 
            // Validators.required
          ),
          cp: new FormControl<string | null>(null),
        }),
    })
  }


  // méthods
  public onSubmit(){
    console.log(this.monForm.value);
    console.log('adress: ', this.monForm.controls['adresse'].value);
    this._service.postForm(this.monForm)
    
  }


  // lifecycle
  ngAfterViewInit(): void {
 
    const eltIcone = <HTMLElement>document.querySelector('#icone-prenom');
   
    this.monForm.controls['firstName'].valueChanges
    .pipe()
    .subscribe(
      (field:any) => {
        console.log(field);
        if (field.length <= 2 || field.length >= 10) {
          eltIcone.style.color = 'red';
        } else {
          eltIcone.style.color = 'green';
        }
       
      }
    )
   
  }
}
