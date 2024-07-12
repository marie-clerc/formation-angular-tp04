import { Injectable } from '@angular/core';
import { WarnService } from './warn.service';
 
@Injectable({
    providedIn: 'root'
})
export class OperationsService {
 
    constructor(
        private _warn: WarnService
    ) { }
 
    // Méthodes
 
    public ajouter = (nb1: number, nb2: number) => {
        this._warn.warnMessage('Ajout OK');
        // this._warn.warnMessage('Ajout OK');
        return nb1 + nb2;
    }
 
    public soustraire = (nb1: number, nb2: number) => {
        this._warn.warnMessage('Soustraction OK');
        // case err
        this._warn.logErreur('notOK');
        // this._warn.logErreur('notOK');
        return nb1 - nb2;
 
    }
}