import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Admin } from '../model/admin';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(apiurl+"api/admin/adminlist").pipe();
  }

  getAdminId(id:number): Observable<Admin>{
    return this.http.get<Admin>(apiurl+"api/admin/unadmin/"+id).pipe();
  }

  addAdmin(admin: Admin) : Observable<Admin>{
    return this.http.post<Admin>(apiurl + "api/admin/addadmin",admin,httpOptions).pipe();
  }

  updateAdmin(admin: Admin) : Observable<Admin>{
    return this.http.put<Admin>(apiurl+"api/admin/updateadmin", admin,httpOptions).pipe();
  }

  deleteAdmin(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/admin/deleteadmin/"+id).pipe();
  }
}
