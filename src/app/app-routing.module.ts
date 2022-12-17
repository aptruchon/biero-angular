import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  {path: "", component:ListeBiereComponent},
  {path: "biere", component:ListeBiereComponent},
  {path: "biere/:id", component:DetailBiereComponent},
  {path: "**", component:NonTrouveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }