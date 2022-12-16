import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biere } from './biere';
import { ListeBiere } from './liste-biere';

@Injectable({
  providedIn: 'root'
})

export class ApiBieroService {
  bieres: Biere[];
  url: string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http: HttpClient) { }
  
  getBieres():Observable<ListeBiere>{
    return this.http.get<ListeBiere>(this.url);
  }

  getBiere(id: number):Observable<Biere>{
    return this.http.get<Biere>(this.url + id);
  }
  modifBiere(biere:Biere):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        "Authorization" : "Basic " + btoa('biero:biero')
      })
    }
    return this.http.post<Biere>(this.url + biere.id_biere, biere, httpOptions);
  }

  deleteBiere(produit: Biere):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        "Authorization" : "Basic " + btoa('biero:biero')
      })
    }
    return this.http.delete<Biere>(this.url + produit.id_biere, httpOptions);
  }
}

