import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciceServiceService {

  

  constructor(private http: HttpClient) { }

  // Le service sur les exercices
  Create_exercice(exercice:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/exercice/create`,exercice);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_exercice(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/exercice/get`);
  }

  Updated_exercice(exercice_id: number, exercice: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/exercice/update/${exercice_id}`, exercice);
  }
  
  Get_exercice_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/exercice/show/${id}`);
  }


  Delete_exercice(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/exercice/delete/${id}`);
  }

  Cloturer_exercice(id: number, body: any | null): Observable<any>{
    return this.http.put(`${environment.apiUrl}/exercice/cloturer/${id}`, body);
  }



  //Etat consultation
  Create_etat(body: any | null):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/etat/create`,body);
  }

  Read_etat_consultation(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/afficher`);
  }

  Get_etat_id_consultation(id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/etat/show/${id}`);
  }

  Read_etat_remboursement_consultation(id: number): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat_remboursement/afficher/${id}`);
  }

  Generate_pdf_etat_consultation(id: number): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/etat/pdf/${id}`, httpOptions);
  }

  Sort_list_exercice(parametre: number): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/trier/${parametre}?exercice_id=${parametre}`); 
  }


  Read_exercice_consultation(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/exercice`);
  }


  //Etat pharmacie
  Create_etat_pharmacie(body: any | null):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/etat/create/parmacie`,body);
  }

  Read_etat_pharmacie(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/afficher/parmacie`);
  }

  Get_etat_id_pharmacie(id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/etat/show/parmacie/${id}`);
  }

  Read_etat_remboursement_pharmacie(id: number): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat_remboursement/afficher/parmacie/${id}`);
  }

  Generate_pdf_etat_pharmacie(id: number): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/etat/pdf/parmacie/${id}`, httpOptions);
  }

  Sort_list_exercice_pharmacie(parametre: number): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/trier/parmacie/${parametre}?exercice_id=${parametre}`); 
  }


  Read_exercice_pharmacie(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/etat/exerciceparmacie`);
  }
}
