import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-gestionpatient',
  templateUrl: './gestionpatient.component.html',
  styleUrls: ['./gestionpatient.component.scss']
})
export class GestionpatientComponent implements OnInit {

  data: Patient[] = [];
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

  catchpatient(id) {
    console.log(id)
    this.router.navigate(['/editpatient'], { queryParams: { id: id } });
  };


  deletePatient(id) {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    console.log(id)
    this.patientService.deletePatient(id).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(patient => patient.id_patient == id)[0]), 1)


      }
    )
  }
}
