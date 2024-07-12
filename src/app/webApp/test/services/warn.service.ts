import { Injectable } from '@angular/core';
 
@Injectable({
    providedIn: 'root'
})
export class WarnService {
 
    public nbWarn: number = 0;
 
    constructor() { }
 
    // Méthodes
    public warnMessage = (msg: string) => {
        console.warn(`Le message est : ${msg}`);
 
    }
    // ---
    public logErreur = (msg: string) => {
        console.error(`L'erreur' est : ${msg}`);
    }
}