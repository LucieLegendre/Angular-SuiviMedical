import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilmedecinComponent } from './medecin/profilmedecin/profilmedecin.component';
import { EditmedecinComponent } from './medecin/editmedecin/editmedecin.component';
import { AccueilMedecinComponent } from './medecin/accueil-medecin/accueil-medecin.component';
import { AdminsComponent } from './admin/admins/admins.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { UnAdminComponent } from './admin/un-admin/un-admin.component';
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
import { ChoixmedecinComponent } from './patient/choixmedecin/choixmedecin.component';
import { CalendrierpatientComponent } from './patient/calendrierpatient/calendrierpatient.component';
import { ListeconsultationComponent } from './patient/listeconsultation/listeconsultation.component';

const routes: Routes = [


  {
    path:'authentificationpage',
    component: AuthentificationpageComponent,
    data: {title:'autentificationpage'}
  },
  {
    path:'admins',
    component: AdminsComponent,
    data: {title:'admins'}
  },
  {
    path:'addAdmin',
    component: AddAdminComponent,
    data: {title:'addadmin'}
  },
  {
    path:'editAdmin/:id',
    component: EditAdminComponent,
    data: {title:'editadmin'}
  },
  {
    path:'unAdmin',
    component: UnAdminComponent,
    data: {title:'unadmin'}
  },
  {
    path:'gestionmedecin',
    component: GestionmedecinComponent,
    data: {title:'gestionmedecin'}
  },
  {
    path:'addmedecin',
    component: AddmedecinComponent,
    data: {title:'addnmedecin'}
  },
  {
    path:'gestionpatient',
    component: GestionpatientComponent,
    data: {title:'gestionpatient'}
  },
  {
    path:'addpatient',
    component: AddpatientComponent,
    data: {title:'addpatient'}
  },
  {
    path:'accueilmedecin/:id',
    component: AccueilMedecinComponent,
    data: {title:'accueilmedecin'}
  },
  {
    path:'profilmedecin/:id',
    component: ProfilmedecinComponent,
    data: {title:'profilmedecin'}
  },
  {
    path:'editmedecin',
    component: EditmedecinComponent,
    data: {title:'editmedecin'}
  },
  {
    path:'listepatient',
    component: ListepatientComponent,
    data: {title:'listepatient'}
  },
  {
    path:'profilpatient',
    component: ProfilpatientComponent,
    data: {title:'profilpatient'}
  },
  {
    path:'accueilpatient',
    component: AccueilpatientComponent,
    data: {title:'accueilpatient'}
  },
  {
    path:'dossierpatient',
    component: DossierpatientComponent,
    data: {title:'dossierpatient'}
  },
  {
    path:'choixmedecin',
    component: ChoixmedecinComponent,
    data: {title:'choixmedecin'}
  },
  {
    path:'calendrierpatient',
    component: CalendrierpatientComponent,
    data: {title:'calendrierpatient'}
  },
  {
    path:'listeconsultation',
    component: ListeconsultationComponent,
    data: {title:'listeconsultation'}
  },
  {
    path:'undossier',
    component: UndossierComponent,
    data: {title:'undossier'}
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
