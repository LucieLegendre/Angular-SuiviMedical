import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../model/patient';
import { DossierMedical } from '../model/dossier-medical';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>(apiurl+"api/patient/patientlist").pipe();
  }

  getPatientId(id:number): Observable<Patient>{
    return this.http.get<Patient>(apiurl+"api/patient/unpatient/"+id).pipe();
  }

  addPatient(analyse: Patient) : Observable<Patient>{
    return this.http.post<Patient>(apiurl + "api/patient/addpatient", analyse,httpOptions).pipe();
  }

  updatePatient(analyse: Patient) : Observable<Patient>{
    return this.http.put<Patient>(apiurl+"api/patient/updatepatient", analyse,httpOptions).pipe();
  }

  deletePatient(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/patient/deletepatient/"+id).pipe();
  }

  linkDossierPatient(id:number, dossier: DossierMedical) : Observable<Patient>{
    return this.http.put<Patient>(apiurl+"api/patient/dossier/"+id, dossier,httpOptions).pipe();
  }
}
