import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModificationBiereComponent } from './modification-biere/modification-biere.component';
import { AjoutDeBiereComponent } from './ajout-de-biere/ajout-de-biere.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  {path: "", component:ListeBiereComponent},
  {path: "biere", component:ListeBiereComponent},
  {path: "biere/ajout", component:AjoutDeBiereComponent},
  {path: "biere/:id", component:ModificationBiereComponent},
  {path: "**", component:NonTrouveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }