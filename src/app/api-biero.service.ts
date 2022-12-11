import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}

