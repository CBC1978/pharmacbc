import { isPlatformBrowser } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()

export class authInterceptor implements HttpInterceptor{
  constructor(@Inject(PLATFORM_ID)private platformId:object){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string | null = null;
    // Récupérer le token du localStorage
    if(isPlatformBrowser(this.platformId)){
      token = localStorage.getItem('token') ;

    }
    // Vérifier si le token est disponible
    if (token) {
      // Cloner la requête et ajouter le token dans l'en-tête d'authentification
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(authReq)
      // Envoyer la requête avec le token ajouté
      return next.handle(authReq);
    } else {
     // Si aucun token n'est disponible, envoyer la requête sans modification
      return next.handle(req);
    }
  }
}
export const TockenInterceptorProvider={
  provide:HTTP_INTERCEPTORS,
  useClass:authInterceptor,
  multi:true
 }

