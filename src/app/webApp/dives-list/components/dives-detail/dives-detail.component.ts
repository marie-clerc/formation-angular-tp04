import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dives } from '../../../../shared/class/dives';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dives-detail',
  templateUrl: './dives-detail.component.html',
  styleUrl: './dives-detail.component.scss',
  standalone:true
})
export class DivesDetailComponent implements OnInit {
  // props
  public title: string = '';
  public dive: Dives = new Dives();
  // const
  constructor(
    private _routeActive: ActivatedRoute,
    private _router: Router,
    private _location: Location) {
  }

  // lifeCycle
  ngOnInit(): void {
    console.log(this._routeActive.snapshot.params['id']);
    // console.log(this._routeActive.snapshot.params['param']);
    const id = this._routeActive.snapshot.paramMap.get('id');
    this.title = `Plongée N° ${id}`;
    this._routeActive.queryParams
      // .pipe()
      .subscribe(
        (params: Params) => {
          console.log(params, typeof (params));
          this.dive = params as Dives; // cast         
        }
      )
  }
  // -----------------------------
  public goBack = () => {
    this._router.navigateByUrl('liste-des-plongees')
  }
  public goBack2 = () => {
      this._location.back()
  }
  public goHome = () => {
     this._router.navigate(
      [''], // path invoqué
      {
        queryParams:{
          from:'dives-details',
          time:1000
        },
        // skipLocationChange:true
      }
     )
    
  }

}
