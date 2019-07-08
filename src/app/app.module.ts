import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule, } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { AdminsComponent } from './admin/admins/admins.component';
import { UnAdminComponent } from './admin/un-admin/un-admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { ProfilmedecinComponent } from './medecin/profilmedecin/profilmedecin.component';
import { EditmedecinComponent } from './medecin/editmedecin/editmedecin.component';
import { AccueilMedecinComponent } from './medecin/accueil-medecin/accueil-medecin.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AuthentificationpageComponent } from './authentification/authentificationpage/authentificationpage.component';
import { ProfilpatientComponent } from './patient/profilpatient/profilpatient.component';
import { GestionmedecinComponent } from './admin/gestionmedecin/gestionmedecin.component';
import { GestionpatientComponent } from './admin/gestionpatient/gestionpatient.component';
import { AddpatientComponent } from './admin/addpatient/addpatient.component';
import { AddmedecinComponent } from './admin/addmedecin/addmedecin.component';
import { ListepatientComponent } from './medecin/listepatient/listepatient.component';
import { UndossierComponent } from './dossierMedical/undossier/undossier.component';
import { AccueilpatientComponent } from './patient/accueilpatient/accueilpatient.component';
import { DossierpatientComponent } from './patient/dossierpatient/dossierpatient.component';
import { ListeconsultationComponent } from './patient/listeconsultation/listeconsultation.component';
import { ChoixmedecinComponent } from './patient/choixmedecin/choixmedecin.component';
import { CalendrierpatientComponent } from './patient/calendrierpatient/calendrierpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    UnAdminComponent,
    AddAdminComponent,
    EditAdminComponent,
    ProfilAdminComponent,
    ProfilmedecinComponent,
    EditmedecinComponent,
    AccueilMedecinComponent,
    AuthentificationpageComponent,
    ProfilpatientComponent,
    GestionmedecinComponent,
    GestionpatientComponent,
    AddpatientComponent,
    AddmedecinComponent,
    ListepatientComponent,
    UndossierComponent,
    AccueilpatientComponent,
    DossierpatientComponent,
    ListeconsultationComponent,
    ChoixmedecinComponent,
    CalendrierpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    RouterModule, 
    MatCardModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatSelectModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule,
    FlatpickrModule.forRoot()

  ],
  
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
