import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Analyse } from '../model/analyse';
import { DossierMedical } from '../model/dossier-medical';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http: HttpClient) { }

  getAnalyse(): Observable<Analyse[]>{
    return this.http.get<Analyse[]>(apiurl+"api/analyse/analyselist").pipe();
  }

  getAnalyseId(id:number): Observable<Analyse>{
    return this.http.get<Analyse>(apiurl+"api/analyse/uneanalyse/"+id).pipe();
  }

  putAnalyseDossier(dossierMedical: DossierMedical) :Observable<Analyse[]>{
    return this.http.put<Analyse[]>(apiurl+"api/analyse/analyse/dossier", dossierMedical, httpOptions ).pipe();
  }

  addAnalyse(analyse: Analyse) : Observable<Analyse>{
    return this.http.post<Analyse>(apiurl + "api/analyse/addanalyse", analyse,httpOptions).pipe();
  }

  updateAnalyse(analyse: Analyse) : Observable<Analyse>{
    return this.http.put<Analyse>(apiurl+"api/analyse/updateanalyse", analyse,httpOptions).pipe();
  }

  deleteAnalyse(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/analyse/deleteanalyse/"+id).pipe();
  }

  linkDossierAnalyse(id:number, dossier: DossierMedical) : Observable<Analyse>{
    return this.http.put<Analyse>(apiurl+"api/analyse/dossier/"+id, dossier,httpOptions).pipe();
  }

}
