import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voirPlus',
  standalone: true
})
export class VoirPlusPipe implements PipeTransform {

  transform(data:string, nbCars:number, texte:string): unknown {
    return `${data.substring(0,nbCars)} ${texte}`;
  }

}
