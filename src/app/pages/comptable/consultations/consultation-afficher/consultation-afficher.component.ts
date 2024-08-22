import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';

@Component({
  selector: 'app-consultation-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './consultation-afficher.component.html',
  styleUrl: './consultation-afficher.component.css'
})
export class ConsultationAfficherComponent implements OnInit {

  consultations: any[] = [];
  consultation!:any;
  constructor(private router: Router,  private consultationService: ConsultationServiceService, private route:ActivatedRoute) { }
  
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

  Remboursement_consultation(id: number) {
    this.consultationService.Repay_consultation(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_consultation();
    });
  }

}
