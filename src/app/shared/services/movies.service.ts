import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Films } from '../class/films';

// décorateur 
@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private films: Films[] = [];

    // 2- const (injection de dépendances)
    constructor(
        private _http: HttpClient
    ) { }

    // 3- méthodes
    public getDives(): Observable<Films[]> {
        const API_URL = 'http://localhost:3001/films1'; 
        return this._http.get<Films[]>(API_URL)
            .pipe(               
                tap(
                    (responseHTTP: any) => {
                        console.log('Depuis le service : ', responseHTTP);
                    }
                ),
                // delay(4000),        
                map(
                    (datas: Films[]) => {
                        return datas.filter(
                            (data: Films) => {
                                // return data.id==5;
                                return data.id >= 1;
                            }
                        )
                    }
                )
            )
    }
}
