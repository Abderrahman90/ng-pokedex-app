import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { from } from 'rxjs';
  
// liste routes sous forme de tableau avec param RouterModule.forRoot
const appRoutes: Routes = [
    
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, //url vide que nous capturons lors du lancement de l'appli avec la commande npm start on le redirige vers /pokemons
    {path: '**', component: PageNotFoundComponent }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }