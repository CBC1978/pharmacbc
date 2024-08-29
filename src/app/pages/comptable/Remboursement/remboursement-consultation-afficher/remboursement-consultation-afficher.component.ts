import { Component, OnInit } from '@angular/core';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { Router } from '@angular/router';
import { ExerciceServiceService } from '../../../../services/exerciceService/exercice-service.service';


@Component({
  selector: 'app-remboursement-consultation-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './remboursement-consultation-afficher.component.html',
  styleUrl: './remboursement-consultation-afficher.component.css'
})
export class RemboursementConsultationAfficherComponent implements OnInit {

  consultations: any[] = [];
  consultation!:any;
  constructor(private router: Router,   private remboursement_consultationService: ConsultationServiceService,private  etat_service: ExerciceServiceService) { }
  
  ngOnInit(): void {
    this.Afficher_remboursement();
    
  }
 

  Afficher_remboursement() {
    this.remboursement_consultationService.Read_remboursement_comptable().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.consultations = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.consultations = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Pdf_remboursement_consultation(): void {
    this.remboursement_consultationService.Generate_pdf_consultation().subscribe((data: Blob) => {
      // Exemple : pour le téléchargement du PDF
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = 'Liste des remboursements.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });

  }

  etat() { 
    this.etat_service.Create_etat(null).subscribe(response => {
      console.log('État créé avec succès:', response);
      // Ajoutez ici une action à effectuer après le succès
    });
  }

}
