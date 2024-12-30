import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';
import { formatNumber } from '../../../../../separateur';

@Component({
  selector: 'app-pharmacie-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './pharmacie-afficher.component.html',
  styleUrl: './pharmacie-afficher.component.css'
})
export class PharmacieAfficherComponent implements OnInit {

  pharmacies: any[] = [];
  pharmacie!:any;
  commentaire: string = '';
  selected_pharmacie_id: number | null = null;
  constructor(private router: Router,  private pharmacieService: PharmacieServiceService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Afficher_pharmacie();
    
  }
 
  public formatNumber = formatNumber;
  Afficher_pharmacie() {
    this.pharmacieService.Read_pharmacie_comptable().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.pharmacies = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.pharmacies = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Trier_liste_pharmacie(parametre: string) {
    this.pharmacieService.Sort_list_pharmacie(parametre).subscribe(response => {
      this.pharmacies = response.data;
    });
  }

  Open_modal(pharmacie: any) {
    if (pharmacie.montant_demande >= 150000) {
      this.pharmacie = pharmacie;
      const modalDiv = document.getElementById('commentModal');
      if(modalDiv!= null){
        modalDiv.style.display ='Block';
      }
    } else {
      this.Remboursement_pharmacie(pharmacie.id, '');
    }
  }



  validerConsultation() {
    const pharmacie_id = this.pharmacie.id
    const commentaire = this.commentaire;
    this.Remboursement_pharmacie(pharmacie_id, commentaire);
    this.Close(); 
  }


  Close(){
    const modalDiv = document.getElementById('commentModal');
    if(modalDiv!= null){
      modalDiv.style.display ='none';
    }
  }  

  Close_rejet(){
    const modalDiv = document.getElementById('refuserDemande');
    if(modalDiv!= null){
      modalDiv.style.display ='none';
    }
  }

  Open_rejeter(pharmacie: any) {
      this.pharmacie = pharmacie;
      const modalDiv = document.getElementById('refuserDemande');
      if(modalDiv!= null){
        modalDiv.style.display ='Block';
      }
  }

  Rejeter_demande() {
    const pharmacie_id = this.pharmacie.id
    const commentaire = this.commentaire;
    this.Rejeter_remboursement_pharmacie(pharmacie_id, commentaire);
    this.Close_rejet(); 
  }


  Remboursement_pharmacie(id: number, commentaire: string) {
    this.pharmacieService.Repay_pharmacie(id,commentaire).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_pharmacie();
    });
  }


  Rejeter_remboursement_pharmacie(id: number, commentaire: string) {
    this.pharmacieService.Reject_pharmacie(id,commentaire).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_pharmacie();
    });
  }
}
