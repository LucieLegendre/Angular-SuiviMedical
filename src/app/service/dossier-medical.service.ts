import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DossierMedical } from '../model/dossier-medical';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {

  constructor(private http: HttpClient) { }

  getDossier(): Observable<DossierMedical[]>{
    return this.http.get<DossierMedical[]>(apiurl+"api/dossier/dmlist").pipe();
  }

  getDossierId(id:number): Observable<DossierMedical>{
    return this.http.get<DossierMedical>(apiurl+"api/dossier/undm/"+id).pipe();
  }

  addDossier(dossier: DossierMedical) : Observable<DossierMedical>{
    return this.http.post<DossierMedical>(apiurl + "api/dossier/adddm", dossier,httpOptions).pipe();
  }

  updateDossier(dossier: DossierMedical) : Observable<DossierMedical>{
    return this.http.put<DossierMedical>(apiurl+"api/dossier/updatedm", dossier,httpOptions).pipe();
  }

  deleteDossier(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/dossier/deletedm/"+id).pipe();
  }

}
