import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/model/medecin';
import { MedecinService } from 'src/app/service/medecin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-choixmedecin',
  templateUrl: './choixmedecin.component.html',
  styleUrls: ['./choixmedecin.component.scss']
})
export class ChoixmedecinComponent implements OnInit {

  listMedecin: Medecin[];
  selectedlist: Medecin[];
  id: number;
  medecin: Medecin;

  show: boolean = false;
  buttonName: any = 'Hide';


  constructor(private medecinService: MedecinService, private router: Router) { }

  ngOnInit() {
    this.medecinService.getMedecin().subscribe(
      res => {
        this.listMedecin = res;
        console.log(this.listMedecin)
      }
    )
  }


  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  afficher(specialite, ville) {
    console.log(specialite, ville)
    this.toggle()

    this.medecinService.getMedecinSpeVille(specialite, ville).subscribe(
      res => {
        console.log(res);
        this.selectedlist = res;
      }
    )
  }

  catchMedecin(id){
    console.log(id)
    this.router.navigate(['/calendrierpatient'],{queryParams: {id: id} } );
  }
}
