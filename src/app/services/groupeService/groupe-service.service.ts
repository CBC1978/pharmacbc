import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupeServiceService {

  url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }
  

  // Le service sur les fonctions
  Create_fonction(fonction:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/fonction/create`,fonction);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_fontion(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/fonction/get`);
  }

  Updated_fonction(fonction_id: number, fonction: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(`${environment.apiUrl}/fonction/update/${fonction_id}`, fonction, { headers });
  }
  
  Get_fonction_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/fonction/show/${id}`);
  }


  Delete_fontion(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/fonction/delete/${id}`);
  }





  // Le service sur les sites
  Create_site(site:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/site/create`,site);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_site(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/site/get`);
  }
  

  Read_user_site(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/site/user`);
  }
  Updated_site(site_id: number, site: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/site/update/${site_id}`, site);
  }
  
  Get_site_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/site/show/${id}`);
  }


  Delete_site(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/site/delete/${id}`);
  }





  // Le service sur les roles
  Create_role(role:any):Observable<any>{
    return this.http.post<any[]>(`${environment.apiUrl}/role/create`,role);
  }

  // Permet de connecter la fonction de récupération de données à mon front 
  Read_role(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/role/get`);
  }

  Updated_role(role_id: number, role: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/role/update/${role_id}`, role);
  }
  
  Get_role_id (id: number): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/role/show/${id}`);
  }


  Delete_role(id: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/role/delete/${id}`);
  }



  // Permet de connecter la fonction de récupération de données à mon front 
  Read_permission(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/permission/get`);
  }

  assignPermissions(id: number, permissions: number[]): Observable<any> {
    return this.http.post(`${environment.apiUrl}/role/${id}/attache`, { permissions });
  }

  Users_permissions(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/users/permissions`);
  }
  


  Get_number(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/nombre/champ`);
  }


  Search(page: string, query: string): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/rechercher/afficher?page=${page}&query=${query}`);
  }



  Read_historique(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/historique/read`);
  } 

  Notifications_read(): Observable<any>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/notifications/afficher`);
  } 


  Mark_read(): Observable<any>{
    return this.http.put(`${environment.apiUrl}/notifications/read`, {});
  }

}
