import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/app/model/consultation';
import { Patient } from 'src/app/model/patient';
import { Medecin } from 'src/app/model/medecin';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { ConsultationService } from 'src/app/service/consultation.service';
import { MedecinService } from 'src/app/service/medecin.service';

@Component({
  selector: 'app-accueilpatient',
  templateUrl: './accueilpatient.component.html',
  styleUrls: ['./accueilpatient.component.scss']
})
export class AccueilpatientComponent implements OnInit {

  idp: number;
  idc:number;
  consultationlist: Consultation[];
  patient: Patient
  Medecin: Medecin

  constructor(private patientService: PatientService, private medecinService: MedecinService, private consultationService: ConsultationService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.idp = +params['id'] || 0; });
    this.patientService.getPatientId(this.idp).subscribe(
      res => {
        this.patient = res;
        console.log(this.patient);
        
        this.consultationService.putPatientConsultation(this.patient).subscribe(
          res =>{
            this.consultationlist = res;
            console.log("Consultation"+this.consultationlist[0].numConsultation)
          }
        )
      }

    )
  }

}
