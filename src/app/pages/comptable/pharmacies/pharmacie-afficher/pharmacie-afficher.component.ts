import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';

@Component({
  selector: 'app-pharmacie-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './pharmacie-afficher.component.html',
  styleUrl: './pharmacie-afficher.component.css'
})
export class PharmacieAfficherComponent implements OnInit {

  pharmacies: any[] = [];
  pharmacie!:any;
  constructor(private router: Router,  private pharmacieService: PharmacieServiceService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Afficher_pharmacie();
    
  }
 

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

  Remboursement_pharmacie(id: number) {
    this.pharmacieService.Repay_pharmacie(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_pharmacie();
    });
  }
}
