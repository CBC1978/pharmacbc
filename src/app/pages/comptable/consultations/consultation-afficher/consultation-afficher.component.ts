import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import bootstrap from '../../../../../main.server';

@Component({
  selector: 'app-consultation-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './consultation-afficher.component.html',
  styleUrl: './consultation-afficher.component.css'
})
export class ConsultationAfficherComponent implements OnInit {

  consul_rembForm!: FormGroup;
  consultations: any[] = [];
  consultation!:any;
  commentaire: string = '';
  selected_consultation_id: number | null = null;
  constructor(private consultationService: ConsultationServiceService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Afficher_consultation();
  }
 

  Afficher_consultation() {
    this.consultationService.Read_consultation_comptable().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.consultations = response.data;
    }); 
  }



  handleSearchResults(results: any[]){
    this.consultations = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }



  Trier_liste_consultation(parametre: string) {
    this.consultationService.Sort_list_consultation(parametre).subscribe(response => {
      this.consultations = response.data;
    });
  }


  Open_modal(consultation: any) {
    if (consultation.montant_demande >= 100000) {
      this.consultation = consultation;
      const modalDiv = document.getElementById('commentModal');
      if(modalDiv!= null){
        modalDiv.style.display ='Block';
      }
    } else {
      this.Remboursement_consultation(consultation.id, '');
    }
  }



  validerConsultation() {
    const consultation_id = this.consultation.id
    const commentaire = this.commentaire;
    this.Remboursement_consultation(consultation_id, commentaire);
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

  Open_rejeter(consultation: any) {
      this.consultation = consultation;
      const modalDiv = document.getElementById('refuserDemande');
      if(modalDiv!= null){
        modalDiv.style.display ='Block';
      }
  }

  Rejeter_demande() {
    const consultation_id = this.consultation.id
    const commentaire = this.commentaire;
    this.Rejeter_remboursement_consultation(consultation_id, commentaire);
    this.Close_rejet(); 
  }


  Remboursement_consultation(id: number, commentaire: string) {
    this.consultationService.Repay_consultation(id,commentaire).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_consultation();
    });
  }


  Rejeter_remboursement_consultation(id: number, commentaire: string) {
    this.consultationService.Reject_consultation(id,commentaire).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_consultation();
    });
  }

}
