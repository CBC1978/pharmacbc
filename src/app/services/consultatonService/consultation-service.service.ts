import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultationServiceService {

  constructor(private http: HttpClient) { }


  // Le service de consultation pour le comptable
  Read_consultation_comptable(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/consultation/affiche_liste`);
  }

  Close_exercise(id: number, body: any | null): Observable<any>{
    return this.http.put(`${environment.apiUrl}/exercice/cloturer/${id}`, body);
  }

  Sort_list_consultation(parametre: string): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/consultation/trier_liste/${parametre}?statut=${parametre}`); 
  }

  Repay_consultation(id: number): Observable<any>{
    return this.http.post(`${environment.apiUrl}/remboursement_consultation/create/${id}`, id);
  }


  Read_remboursement_comptable(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/remboursement_consultation/afficher`);
  }

  Generate_pdf_consultation(): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/consultation/pdf_comptable`, httpOptions);
  }


  // Le service de pour les demandes de remboursement de consultation pour l'utilisateur 
  
  Create_consultation(consultation:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/consultation/create `,consultation);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_consultation(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/consultation/afficher`);
  }

  Updated_consultation(consultation_id: number, consultation: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/consultation/update/${consultation_id}`, consultation);
  }
  
  Get_consultation_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/consultation/show/${id}`);
  }


  Delete_consultation(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/consultation/delete/${id}`);
  }

  Generate_pdf_user(): Observable<Blob>
  {
    const httpOptions = {
      // Permet d'indiquer que la réponse doit être traitée comme un Blob
      responseType: 'blob' as 'json', 
    };
    return this.http.get<Blob>(`${environment.apiUrl}/consultation/pdf`, httpOptions);
  }

}
