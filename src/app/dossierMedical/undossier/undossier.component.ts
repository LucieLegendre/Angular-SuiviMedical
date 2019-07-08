import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { DossierMedical } from 'src/app/model/dossier-medical';
import { PatientService } from 'src/app/service/patient.service';
import { DossierMedicalService } from 'src/app/service/dossier-medical.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Analyse } from 'src/app/model/analyse';
import { AnalyseService } from 'src/app/service/analyse.service';

@Component({
  selector: 'app-undossier',
  templateUrl: './undossier.component.html',
  styleUrls: ['./undossier.component.scss']
})
export class UndossierComponent implements OnInit {

  idp: number;
  patient: Patient;
  idd: number;
  dossierMecical: DossierMedical;
  ida: number;
  analyse: Analyse;
  analyses: Analyse[];

  constructor(private patientService: PatientService, private dossierService: DossierMedicalService, private analyseService: AnalyseService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.idp = +params['id'] || 0; });
    this.patientService.getPatientId(this.idp).subscribe(
      res => {
        this.patient = res;
        console.log(this.patient);

        this.dossierService.getDossierId(this.patient.dossierMedical.id_dossier).subscribe(
          res => {
            this.dossierMecical = res;
            console.log(this.dossierMecical)
        

            this.analyseService.putAnalyseDossier(this.dossierMecical).subscribe(
              res=>{
                this.analyses = res;
                console.log("Analyse"+this.analyses[0].type)
              }
            )
          }
        )
      }
    )
  }
}
