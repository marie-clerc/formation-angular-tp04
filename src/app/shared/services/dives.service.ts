import { Injectable } from '@angular/core';
import { Dives } from '../class/dives';
import { HttpClient } from '@angular/common/http';
import { delay, first, map, Observable, tap } from 'rxjs';

// décorateur 
@Injectable({
  providedIn: 'root'
})

export class DivesService {
  // le rôle : faire une requête HTTPClient (GET)
  // 1- props
  private dives: Dives[] = [];

  // 2- const (injection de dépendances)
  constructor(
    private _http: HttpClient
  ) { }

  // 3- méthodes
  public getDives(): Observable<Dives[]> {

    const API_URL = 'http://localhost:3001/dives';
    // const API_URL = 'https://dev.webjs.fr/dives.json';

    return this._http.get<Dives[]>(API_URL)
      .pipe(
        // le pipe encapsule(wrappe) tous les opérateurs RXJS
        tap(
          // operateur de debug
          (responseHTTP: any) => {
            console.log('Depuis le service : ', responseHTTP);
          }
        ),
        // delay(4000),        
        map(
          (datas: Dives[]) => {
            return datas.filter(
              (data: Dives) => {
                // return data.id==5;
                return data.id >= 1;
              }
            )
          }
        )

      )


  }
}
