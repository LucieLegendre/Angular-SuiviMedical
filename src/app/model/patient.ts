import { DossierMedical } from "./dossier-medical";

export class Patient {
    id_patient: number;
    numSecu: string;
    nom: string;
    prenom: string;
    age: number;
    adresse: string;
    ville: string;
    n_tel: number;
    email: string;
    login: string;
    password: string;
    dossierMedical: DossierMedical;
}
