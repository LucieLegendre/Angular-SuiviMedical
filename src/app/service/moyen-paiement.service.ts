import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MoyenPaiement } from '../model/moyen-paiement';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class MoyenPaiementService {

  constructor(private http: HttpClient) { }

  getMp(): Observable<MoyenPaiement[]>{
    return this.http.get<MoyenPaiement[]>(apiurl+"api/mp/mplist").pipe();
  }

  getMpId(id:number): Observable<MoyenPaiement>{
    return this.http.get<MoyenPaiement>(apiurl+"api/mp/unmp/"+id).pipe();
  }

  addMp(mp: MoyenPaiement) : Observable<MoyenPaiement>{
    return this.http.post<MoyenPaiement>(apiurl + "api/mp/addmp", mp,httpOptions).pipe();
  }

  updateMp(mp: MoyenPaiement) : Observable<MoyenPaiement>{
    return this.http.put<MoyenPaiement>(apiurl+"api/mp/updatemp", mp,httpOptions).pipe();
  }

  deleteMp(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/mp/deletemp/"+id).pipe();
  }
}
