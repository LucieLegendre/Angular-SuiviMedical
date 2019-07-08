import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Medecin } from 'src/app/model/medecin';
import { MedecinService } from 'src/app/service/medecin.service';

@Component({
  selector: 'app-gestionmedecin',
  templateUrl: './gestionmedecin.component.html',
  styleUrls: ['./gestionmedecin.component.scss']
})
export class GestionmedecinComponent implements OnInit {

  data: Medecin[] = [];
  medecin: Medecin = new Medecin;
  id: number;

  constructor(private medecinService: MedecinService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.medecinService.getMedecin().subscribe(
      res => {
        this.data = res;
        console.log(this.data)

      }
    )
  }

  catchMedecin(id) {
    console.log(id)
    this.router.navigate(['/editmedecin'], { queryParams: { id: id } });
  };


  deleteMedecin(id) {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    console.log(id)
    this.medecinService.deleteMedecin(id).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(medecin => medecin.id_medecin == id)[0]), 1)


      }
    )
  }
}
