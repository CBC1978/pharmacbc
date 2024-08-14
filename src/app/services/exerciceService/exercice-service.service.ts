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
}
