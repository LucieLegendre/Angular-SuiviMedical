import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Consultation } from '../model/consultation';
import { Medecin } from '../model/medecin';
import { Patient } from '../model/patient';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  getConsultation(): Observable<Consultation[]>{
    return this.http.get<Consultation[]>(apiurl+"api/consultation/consultationlist").pipe();
  }

  getConsultationId(id:number): Observable<Consultation>{
    return this.http.get<Consultation>(apiurl+"api/consultation/uneconsultation/"+id).pipe();
  }
  putPatientConsultation(patient: Patient) : Observable<Consultation[]>{
    return this.http.put<Consultation[]>(apiurl + "api/consultation/consultation/patient", patient,httpOptions).pipe();
  }

  addConsultation(consultation: Consultation) : Observable<Consultation>{
    return this.http.post<Consultation>(apiurl + "api/consultation/addconsultation", consultation,httpOptions).pipe();
  }

  updateConsultation(consultation: Consultation) : Observable<Consultation>{
    return this.http.put<Consultation>(apiurl+"api/consultation/updateconsultation", consultation,httpOptions).pipe();
  }

  deleteConsultation(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/consultation/deleteconsultation/"+id).pipe();
  }

  linkPatientConsultation(id:number, patient: Patient) : Observable<Consultation>{
    return this.http.put<Consultation>(apiurl+"api/consultation/patient/"+id, patient,httpOptions).pipe();
  }

  linkMedecinConsultation(id:number, medecin: Medecin) : Observable<Consultation>{
    return this.http.put<Consultation>(apiurl+"api/consultation/medecin/"+id, medecin,httpOptions).pipe();
  }
}
