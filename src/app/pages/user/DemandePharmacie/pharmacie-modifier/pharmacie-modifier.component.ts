import { Component } from '@angular/core';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-pharmacie-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './pharmacie-modifier.component.html',
  styleUrl: './pharmacie-modifier.component.css'
})
export class PharmacieModifierComponent {
  pharmacie_id!:any;
  pharmacie!:any;
  message: string = '';
  sites: any[] = [];
  constructor(private router: Router,  private pharmacieService: PharmacieServiceService, private route:ActivatedRoute,private groupeService : GroupeServiceService) { }

  ngOnInit(){
    this.pharmacie_id=this.route.snapshot.paramMap.get('id');
    this.pharmacieService.Get_pharmacie_id(this.pharmacie_id).subscribe(res=>{
        this.pharmacie = res.data;
        console.log('pharmacie :', this.pharmacie)
   }
  );
  this.Afficher_site();
  }

  

  Save_updated() {
    this.pharmacieService.Updated_pharmacie(this.pharmacie.id, this.pharmacie).subscribe(response => {
      console.log( response); 
      if(response.message != 'Veuillez entrez un montant inférieur ou égal à votre solde'){
        this.router.navigateByUrl('afficher_demande_pharmacie');
      }
    },
    (error: HttpErrorResponse) => {
      console.error(error);
      // Vérifiez si le statut est 422 et si le message est présent
      if (error.status === 422 && error.error.message === 'Veuillez entrez un montant inférieur ou égal à votre solde') {
          
          this.message = error.error.message;
  
      } else {
        
      }
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }); 
  }

  Afficher_site() {
    this.groupeService.Read_user_site().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.sites = response.sites_user;
    }); 
  }

}
