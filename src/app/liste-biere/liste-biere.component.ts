import { Component } from '@angular/core';
import { ApiBieroService } from '../api-biero.service';
import { Biere } from '../biere';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-liste-biere',
  templateUrl: './liste-biere.component.html',
  styleUrls: ['./liste-biere.component.scss']
})
export class ListeBiereComponent {
  bieres: Biere[] = [];

  constructor(private serveurConnexion: ConnexionService, private apiBiero: ApiBieroService){}

  ngOnInit(){
    this.apiBiero.getBieres().subscribe((bieres)=>{
      this.bieres = bieres.data;
    })
  }
}