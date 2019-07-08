import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Facture } from '../model/facture';
import { Consultation } from '../model/consultation';
import { MoyenPaiement } from '../model/moyen-paiement';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  getFacture(): Observable<Facture[]>{
    return this.http.get<Facture[]>(apiurl+"api/facture/facturelist").pipe();
  }

  getFactureId(id:number): Observable<Facture>{
    return this.http.get<Facture>(apiurl+"api/facture/unefacture/"+id).pipe();
  }

  addFacture(facture: Facture) : Observable<Facture>{
    return this.http.post<Facture>(apiurl + "api/facture/addfacture", facture,httpOptions).pipe();
  }

  updateFacture(facture: Facture) : Observable<Facture>{
    return this.http.put<Facture>(apiurl+"api/facure/updatefacture", facture,httpOptions).pipe();
  }

  deleteFacture(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/facture/deletefacture/"+id).pipe();
  }

  linkConsulFacture(id:number, consul: Consultation) : Observable<Facture>{
    return this.http.put<Facture>(apiurl+"api/facture/consul/"+id, consul,httpOptions).pipe();
  }

  linkMpFacture(id:number, mp: MoyenPaiement) : Observable<Facture>{
    return this.http.put<Facture>(apiurl+"api/facture/mp/"+id, mp,httpOptions).pipe();
  }
}
