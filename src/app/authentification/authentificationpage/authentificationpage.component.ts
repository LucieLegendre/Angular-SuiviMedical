import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { AdminService } from 'src/app/service/admin.service';
import { MedecinService } from 'src/app/service/medecin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Patient } from 'src/app/model/patient';
import { Medecin } from 'src/app/model/medecin';

@Component({
  selector: 'app-authentificationpage',
  templateUrl: './authentificationpage.component.html',
  styleUrls: ['./authentificationpage.component.scss']
})
export class AuthentificationpageComponent implements OnInit {

  ida: number;
  idm: number;
  idp: number;
  admin: Admin;
  patient: Patient;
  medecin: Medecin;


  constructor(private adminService: AdminService, private patientService: PatientService, private medecinService: MedecinService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  goAdmin(ida){
    this.adminService.getAdminId(ida).subscribe(
      res => {
        console.log(res);
        this.admin = res;
        this.router.navigate(['/editAdmin']);
      }
    )
  }

 goPatient(idp){
   console.log(idp);
   this.patientService.getPatientId(idp).subscribe(
     res => {
       console.log(res);
       this.patient = res;
       this.router.navigate(['/accueilpatient']);
     }
   )
 }

 goMedecin(idm){
  this.medecinService.getMedecinId(idm).subscribe(
     res => {
      console.log(res);
      this.medecin = res;
      this.router.navigate(['/accueilmedecin']);
    }
  )
}

}
