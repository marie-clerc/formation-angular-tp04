import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DivesService } from '../../../../shared/services/dives.service';
import { Dives } from '../../../../shared/class/dives';
import { Subscription } from 'rxjs';
import { DivesListChild1Component } from '../../child-components/dives-list-child1/dives-list-child1.component';
import { RouterLink } from '@angular/router';
import { NgForOf} from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { DivesPipe } from '../../../../shared/pipes/filter.pipe'

@Component({
  selector: 'app-dives-list',
  templateUrl: './dives-list.component.html',
  styleUrl: './dives-list.component.scss',
  standalone:true,
  imports:[
    DivesListChild1Component, // composant
    RouterLink,// feauture simple de routerModule
    FormsModule, // toute la bibliothèque ...
    DivesPipe, // une pipe
  ]
})
export class DivesListComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  // 1- props
  public dives: Dives[] = [];
  private subDatas: Subscription = new Subscription();
  @ViewChildren('btnPlus') eltCollectionBtn!:QueryList<ElementRef>;
  public infosTexte:string='Formation Angular';
  public panier:Dives[]=[];
  public texteSaisi:string='';

  // 2- const 
  constructor(private _service: DivesService) {}

  // 3- cycles de vie
  ngOnInit(): void {
    // Rôle : chargement ou l'initialisation des DATAS    
    this.subDatas = this._service.getDives()
      .subscribe(
        (datas: Dives[]) => {
          console.log('Depuis le composant : ', datas);
          this.dives = datas;
        })
  }
  // ------------
  ngOnDestroy(): void { this.subDatas.unsubscribe(); }
  // ------------------
  ngAfterViewInit(): void {
    // il est appelé une seule fois, lors du 1er chargement du template HTML
    console.warn('After View Init : ');}
  // ----
  ngAfterViewChecked(): void { this.eltCollectionBtn.map(
      (elt,indice) => {
        elt.nativeElement.innerHTML=`Plus d'infos - ${indice}`;
        elt.nativeElement.classList.replace('btn-primary','btn-warning'); }
    )
  }

  // 4- méthodes
  public diveSelected = (e:any) => {
    console.log('Depuis le parent : ', e);
    if (e.paramIsChecked) {
      this.panier.push(e.paramDive);} 
    else {
      let keyPanier = this.panier.indexOf(e.paramDive);
      if (keyPanier >= 0) {
        this.panier.splice(keyPanier, 1);} }     
  }

}
