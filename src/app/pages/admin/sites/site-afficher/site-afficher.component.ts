import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-site-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './site-afficher.component.html',
  styleUrl: './site-afficher.component.css'
})
export class SiteAfficherComponent implements OnInit {

  sites: any[] = [];
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  ngOnInit(): void {
    this.Afficher_site();
  }

  Afficher_site() {
    this.groupeService.Read_site().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.sites = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.sites = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Supprimer_site(id: number) {
    this.groupeService.Delete_site(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_site();
    });
  }


  Modifier_site(id: number) {
    this.router.navigate(['/site_modifier', id]);
  }
}
