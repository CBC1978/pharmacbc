import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-pharmacie-afficher-user',
  standalone: true,
  imports: [SidebarAdminComponent, FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './pharmacie-afficher-user.component.html',
  styleUrl: './pharmacie-afficher-user.component.css'
})
export class PharmacieAfficherUserComponent implements OnInit {

  pharmacies: any[] = [];
  pharmacie!:any;

  constructor(private router: Router,  private pharmacieService: PharmacieServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_pharmacie();
  }

  Afficher_pharmacie() {
    this.pharmacieService.Read_pharmacie().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.pharmacies = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.pharmacies = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }
  Supprimer_pharmacie(id: number) {
    this.pharmacieService.Delete_pharmacie(id).subscribe(response=> {
      console.log(response); 
      // Rafraîchir la liste  après la suppression
      this.Afficher_pharmacie();
    });
  }

  Pdf_remboursement_pharmacie(): void {
    this.pharmacieService.Generate_pdf_user().subscribe((data: Blob) => {
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
    


  Modifier_pharmacie(id: number) {
    this.router.navigate(['/pharmacie_modifier', id]);
  }
}
