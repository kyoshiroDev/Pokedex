import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
    // Angular lis les routes du haut vers le bas
  { path: '', redirectTo: 'pokemons',pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Page 404 toujours en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
