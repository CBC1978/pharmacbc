import { Component, OnInit } from '@angular/core';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { ExerciceServiceService } from '../../../../services/exerciceService/exercice-service.service';
import { formatNumber } from '../../../../../separateur';

@Component({
  selector: 'app-remboursement-pharmacie-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './remboursement-pharmacie-afficher.component.html',
  styleUrl: './remboursement-pharmacie-afficher.component.css'
})
export class RemboursementPharmacieAfficherComponent implements OnInit {

  pharmacies: any[] = [];
  pharmacie!:any;
  constructor(private router: Router,   private remboursement_pharmacieService: PharmacieServiceService, private etatService: ExerciceServiceService) { }
  
  ngOnInit(): void {
    this.Afficher_remboursement();
    
  }


  Afficher_remboursement() {
    this.remboursement_pharmacieService.Read_remboursement_comptable().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.pharmacies = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.pharmacies = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  public formatNumber = formatNumber;
  Pdf_remboursement_pharmacie(): void {
    this.remboursement_pharmacieService.Generate_pdf_pharmacie().subscribe((data: Blob) => {
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
    this.etatService.Create_etat_pharmacie(null).subscribe(response => {
      console.log('État créé avec succès:', response);
      // Ajoutez ici une action à effectuer après le succès
      this.router.navigateByUrl('/etat_afficher_pharmacie')
    });
  }
}
