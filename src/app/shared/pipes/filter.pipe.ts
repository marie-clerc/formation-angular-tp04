import { Pipe, PipeTransform } from '@angular/core';
import { Dives } from '../class/dives';
 
@Pipe({
    name: 'pipeFilter',
    standalone:true,
})
export class DivesPipe implements PipeTransform {
 
    // la méthode transform admet 2 paramètres
    // le 1er : la data à transformer
    // le second: le motif de transformation
 
    // une date(data) | (nomduPipe) date:'dd/MM/y' (motif)
    // myDate | date:'dd/MM/y HH:mm:ss'
 
    transform(datas: Dives[], motif: string): Dives[] {
 
        if (motif !== '') {
            // on a saisi des caractères
            let rst = datas.filter(
 
                (data: Dives) => data.name.toLocaleLowerCase().includes(motif.toLocaleLowerCase())
                    || data.description.toLocaleLowerCase().includes(motif.toLocaleLowerCase())
 
            )
            return rst;
        } else {
            return datas;
        }
    }
}