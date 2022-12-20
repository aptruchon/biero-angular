import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBieroService } from '../api-biero.service';
import { Biere } from '../biere';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modification-biere',
  templateUrl: './modification-biere.component.html',
  styleUrls: ['./modification-biere.component.scss']
})
export class ModificationBiereComponent {
  id: number;
  uneBiere: Biere; 
  formModif: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog){
    this.uneBiere = {id_biere: 0, nom: "", description: "", brasserie: "", image: ""};
  }

  ngOnInit(){
    this.formModif = new FormGroup(
      {
        id_biere: new FormControl("", [Validators.required, Validators.minLength(3)]),
        nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
        brasserie: new FormControl("", [Validators.required, Validators.minLength(3)]),
        description: new FormControl("", [Validators.required, Validators.minLength(3)]),
        image: new FormControl("", [Validators.required]),
        date_modif: new FormControl(""),
        date_ajout: new FormControl(""),
        actif: new FormControl(""),
      }
    );

    this.route.params.subscribe((params)=>{
      this.id = params["id"];

      this.apiBiero.getBiere(this.id).subscribe((biere: any) => {
        this.uneBiere = biere.data;

        if(!this.uneBiere.image){
          this.uneBiere.image = "WOW-BELLE-IMAGE.jeep-aigre";
        }
        this.formModif.setValue(this.uneBiere);
      })
    })
  }

  modifier():void{
    if(this.formModif.status == "VALID"){
      this.uneBiere = this.formModif.value;

      this.apiBiero.modifBiere(this.uneBiere).subscribe((data:any)=>{
        // Valider l'opération
        if(data.data == this.uneBiere.id_biere){
          this.router.navigate(["biere"]);
        }
      })
    }
  }

  delete(uneBiere: any):void{
    this.apiBiero.deleteBiere(uneBiere).subscribe((data:any)=>{
      this.router.navigate(["biere"]);
    });
  }

  openDialog(uneBiere: any) {
    let dialog = this.dialog.open(DialogConfirmationComponent, {data: uneBiere});

    dialog.afterClosed().subscribe(result =>{
      if(result === true){
        this.delete(uneBiere);
      }
      
    });
  }

  // soumettreNgModel():void{
  //     this.apiBiero.modifBiere(this.uneBiere).subscribe((data:any)=>{

  //       // Valider l'opération
  //       if(data.data == this.uneBiere.id_biere){
  //         this.router.navigate(["biere"]);
  //       }
  //     })
  // }
}
