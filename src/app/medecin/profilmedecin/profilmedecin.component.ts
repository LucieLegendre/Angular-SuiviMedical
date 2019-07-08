import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/model/medecin';
import { MedecinService } from 'src/app/service/medecin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profilmedecin',
  templateUrl: './profilmedecin.component.html',
  styleUrls: ['./profilmedecin.component.scss']
})
export class ProfilmedecinComponent implements OnInit {

  id: number;
  medecin: Medecin = new Medecin;

  constructor(private medecinService: MedecinService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => { this.id = paramsId.id});
    console.log(this.id)
    this.medecinService.getMedecinId(this.id).subscribe(
      res => {
        this.medecin = res;
        console.log(this.medecin);
      }
    )
  }

}
