import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(user:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/users/login`,user); 
  }
  Check_email(user:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/verify/email`,user); 
  }

  Reset_password(user:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/forgot/password`,user); 
  }

  register(user:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/users/register`,user);
  }

  Read_users():Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/users/Afficher_utilisateur`);
  }
  
  Delete_user(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/users/Supprimer_utilisateur/${id}`);
  }


  Get_user_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/user/show/${id}`);
  }

  Updated_user(id: number,  body: any | null): Observable<any>{
    return this.http.put(`${environment.apiUrl}/users/Update_user/${id}`, body);
  }

  Get_profile():Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/users/profil`);
  }

  Updated_profil( body: any | null): Observable<any>{
    return this.http.put(`${environment.apiUrl}/users/modifier_utilisateur`, body);
  }

  Updated_password(old_password: string, ng_password: string, body: any | null ): Observable<any> {    
    return this.http.put(`${environment.apiUrl}/users/update_password?ng_password=${ng_password}&old_password=${old_password}`,body);
  }

  logout(): Observable<any>{
    return this.http.delete<any[]>(`${environment.apiUrl}/users/deconnexion`);
  }
}
