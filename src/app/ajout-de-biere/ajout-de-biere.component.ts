import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBieroService } from '../api-biero.service';
import { Biere } from '../biere';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-ajout-de-biere',
  templateUrl: './ajout-de-biere.component.html',
  styleUrls: ['./ajout-de-biere.component.scss']
})
export class AjoutDeBiereComponent {
  uneBiere: Biere; 
  formAjout: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute, private router: Router){
    this.uneBiere = {id_biere: 0, nom: "", description: "", brasserie: "", image: ""};
  }

  ngOnInit(){
    this.formAjout = new FormGroup(
      {
        // id_biere: new FormControl("", [Validators.required, Validators.minLength(3)]),
        nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
        brasserie: new FormControl("", [Validators.required, Validators.minLength(3)]),
        description: new FormControl("", [Validators.required, Validators.minLength(3)]),
        image: new FormControl("", [Validators.required]),
        // date_modif: new FormControl(""),
        // date_ajout: new FormControl(""),
        // actif: new FormControl(""),
      }
    );
  }

  ajouter():void{
    if(this.formAjout.status == "VALID"){
      this.uneBiere = this.formAjout.value;

      this.apiBiero.ajoutBiere(this.uneBiere).subscribe((data:any)=>{
        // Valider l'opération
        console.log(data.data);
        
        if(data.data){
          this.router.navigate(["biere"]);
        }
      })
    }
  }
}
