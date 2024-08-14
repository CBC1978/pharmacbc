import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacieServiceService {

  constructor(private http: HttpClient) { }


  // Le service de pharmacie pour le comptable
  Read_pharmacie_comptable(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/pharmacie/affiche_liste`);
  }

  Close_exercise(id: number, body: any | null): Observable<any>{
    return this.http.put(`${environment.apiUrl}/exercice/cloturer/${id}`, body);
  }

  Sort_list_pharmacie(parametre: string): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/pharmacie/trier_liste/${parametre}?statut=${parametre}`); 
  }

  Repay_pharmacie(id: number): Observable<any>{
    return this.http.post(`${environment.apiUrl}/remboursement_pharmacie/create/${id}`, id);
  }


  Read_remboursement_comptable(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/remboursement_pharmacie/afficher`);
  }

  Generate_pdf_pharmacie(): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/pharmacie/pdf_comptable`, httpOptions);
  }


  // Le service de pour les demandes de remboursement de pharmacie pour l'utilisateur 
  
  Create_pharmacie(pharmacie:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/pharmacie/create`,pharmacie);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_pharmacie(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/pharmacie/afficher`);
  }

  Updated_pharmacie(pharmacie_id: number, pharmacie: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/pharmacie/update/${pharmacie_id}`, pharmacie);
  }
  
  Get_pharmacie_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/pharmacie/show/${id}`);
  }


  Delete_pharmacie(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/pharmacie/delete/${id}`);
  }

  Generate_pdf_user(): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/pharmacie/pdf`, httpOptions);
  }

}
