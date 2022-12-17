import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiBieroService } from '../api-biero.service';
import { Biere } from '../biere';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-liste-biere',
  templateUrl: './liste-biere.component.html',
  styleUrls: ['./liste-biere.component.scss']
})
export class ListeBiereComponent implements AfterViewInit {
  bieres: Biere[] = [];
  dataSource: MatTableDataSource<Biere>;
  
  // Lien pour accéder aux caractéristiques établient dans liste-biere.component.html et attribution à la variable sort
  @ViewChild(MatSort)
  sort: MatSort;

  // Ordre des colonnes de la table
  displayedColumns = ["id_biere", "nom", "brasserie", "description", "image", "date_ajout", "date_modif", "modif", "delete"];

  constructor(private serveurConnexion: ConnexionService, private apiBiero: ApiBieroService){}

  ngOnInit(){
    // Création d'instance de MatTableDataSource et assignation de this.bières pour que ce soit compatible avec MatSort
    this.dataSource = new MatTableDataSource(this.bieres);

    // Attribution et mise à jour de this.dataSource en temps réel
    this.apiBiero.getBieres().subscribe((bieres)=>{
      this.bieres = bieres.data;
      this.dataSource.data = this.bieres;
    })
  }

  // Tri de this.dataSource grâce à MatSort et mise à jour en temps réel.
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => this.dataSource.sort = this.sort);
  }
}