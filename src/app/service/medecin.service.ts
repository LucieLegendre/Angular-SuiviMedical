import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Medecin } from '../model/medecin';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }

  getMedecin(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(apiurl+"api/medecin/medecinlist").pipe();
  }

  getMedecinId(id:number): Observable<Medecin>{
    return this.http.get<Medecin>(apiurl+"api/medecin/unmedecin/"+id).pipe();
  }

  getMedecinSpeVille(specialite:String, ville: String) : Observable<Medecin[]>{
    return this.http.get<Medecin[]>(apiurl+"api/medecin/medecinlist/"+specialite+"/"+ville).pipe();
  }

  addMedecin(medecin: Medecin) : Observable<Medecin>{
    return this.http.post<Medecin>(apiurl + "api/medecin/addmedecin", medecin,httpOptions).pipe();
  }

  updateMedecin(medecin: Medecin) : Observable<Medecin>{
    return this.http.put<Medecin>(apiurl+"api/medecin/updatemedecin", medecin,httpOptions).pipe();
  }

  deleteMedecin(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/medecin/deletemedecin/"+id).pipe();
  }
}
