import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-demande-afficher',
  standalone: true,
  imports: [SidebarAdminComponent, FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './demande-afficher.component.html',
  styleUrl: './demande-afficher.component.css'
})
export class DemandeAfficherComponent implements OnInit {

  consultations: any[] = [];
  consultation!:any;

  constructor(private router: Router,  private consultationService: ConsultationServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_consultation();
  }

  Afficher_consultation() {
    this.consultationService.Read_consultation().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.consultations = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.consultations = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }
  Supprimer_consultation(id: number) {
    this.consultationService.Delete_consultation(id).subscribe(response=> {
      console.log(response); 
      // Rafraîchir la liste  après la suppression
      this.Afficher_consultation();
    });
  }

  Pdf_remboursement_consultation(): void {
    this.consultationService.Generate_pdf_user().subscribe((data: Blob) => {
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
    


  Modifier_consultation(id: number) {
    this.router.navigate(['/consultation_modifier', id]);
  }
}
