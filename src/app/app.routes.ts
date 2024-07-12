import { Routes } from '@angular/router';
import { HomeComponent } from './webApp/accueil/home/home.component';
import { CommandesComponent } from './webApp/compte-client/components-routing/commandes/commandes.component';
import { LivraisonsComponent } from './webApp/compte-client/components-routing/livraisons/livraisons.component';
import { SignalsComponent } from './webApp/signals/signals/signals.component';
import { DivesListComponent } from './webApp/dives-list/components/dives-list/dives-list.component';
import { DivesDetailComponent } from './webApp/dives-list/components/dives-detail/dives-detail.component';
import { ContactComponent } from './webApp/contact/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, title:'Angular 18 - StandAlone Components' },
    { path: 'liste-des-plongees', component: DivesListComponent, title:'Liste des plongees' },
    { path: 'liste-des-plongees/details/:id', component: DivesDetailComponent, title:'Détails ........' },
    { path: 'les-signals-angular-17', component: SignalsComponent, title:'Les signals Angulars 17 - trop Cool' },

    // Avec le Lazy Loading Component 😉
    {
        path: 'compte-client', title:'Mon espace client - Formation Angular',
        loadComponent:
            () => import('./webApp/compte-client/components/compte-client/compte-client.component')
                .then(
                    (c) => c.EntryCompteClientComponent
                ),
        children: [
            { path: 'mes-commandes', component: CommandesComponent },
            { path: 'mes-livraisons', component: LivraisonsComponent },
        ]
    },
    {path:'nous-contacter', loadComponent: 
        () => import('./webApp/contact/contact/contact.component')
        .then(
            (c) => c.ContactComponent
        ), title: 'Nous Contacter'},
        
    {path:'**', redirectTo:'',title:'Page Introuvable !'}
];
