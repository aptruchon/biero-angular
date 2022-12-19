import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBieroService } from '../api-biero.service';
import { Biere } from '../biere';

@Component({
  selector: 'app-modification-biere',
  templateUrl: './modification-biere.component.html',
  styleUrls: ['./modification-biere.component.scss']
})
export class ModificationBiereComponent {
  id: number;
  uneBiere: Biere; 
  formModif: FormGroup;

  constructor(private apiBiero: ApiBieroService, private route: ActivatedRoute, private router: Router){
    this.uneBiere = {id_biere: 0, nom: "", description: "", brasserie: "", image: ""};
  }

  ngOnInit(){
    this.formModif = new FormGroup(
      {
        id_biere: new FormControl("", [Validators.required, Validators.minLength(3)]),
        nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
        brasserie: new FormControl("", [Validators.required, Validators.minLength(3)]),
        description: new FormControl("", [Validators.required, Validators.minLength(3)]),
        image: new FormControl(""),
        date_modif: new FormControl(""),
        date_ajout: new FormControl(""),
        actif: new FormControl(""),
      }
    );

    this.route.params.subscribe((params)=>{
      this.id = params["id"];

      this.apiBiero.getBiere(this.id).subscribe((biere: any) => {
        this.uneBiere = biere.data;
        this.uneBiere.image = "WOWQUELLEBELLEIMAGE";
        this.formModif.setValue(this.uneBiere);
      })
    })
  }

  
  modifier():void{
    if(this.formModif.status == "VALID"){
      this.uneBiere = this.formModif.value;

      this.apiBiero.modifBiere(this.uneBiere).subscribe((data:any)=>{
        // console.log(data);
        // Valider l'opération
        if(data.data == this.uneBiere.id_biere){
          this.router.navigate(["biere"]);
        }
      })
    }
  }

  annuler():void{
    this.formModif.setValue(this.uneBiere);
  }

  delete():void{
    this.apiBiero.deleteBiere(this.uneBiere).subscribe((data:any)=>{
      this.router.navigate(["biere"]);
    });
  }

  soumettreNgModel():void{
      this.apiBiero.modifBiere(this.uneBiere).subscribe((data:any)=>{

        // Valider l'opération
        if(data.data == this.uneBiere.id_biere){
          this.router.navigate(["biere"]);
        }
      })
  }
}
