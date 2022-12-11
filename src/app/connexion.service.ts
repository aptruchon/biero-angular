import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  etatConnexion:Boolean = false;

  constructor() { }

  getEtatConnexion():Boolean {
    return this.etatConnexion;

  }

  setEtatConnexion(etat: Boolean):void {
    this.etatConnexion = etat;
  }
}
