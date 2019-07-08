import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.scss']
})
export class ListepatientComponent implements OnInit {

  data : Patient[] = [];
  patient: Patient = new Patient;
  id: number;


  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.patientService.getPatient().subscribe(
      res => {
      this.data = res;
        console.log(this.data)

      }
    )
  }

  afficherDossier(id) {
    console.log ("ID SELECTIONNEE"+id)
    this.patientService.getPatientId(id).subscribe(
      res => {
        console.log(res);
        this.patient = res;
        this.router.navigate(['/undossier'], { queryParams: { id: id }});
      }
    ) 
  }
}
