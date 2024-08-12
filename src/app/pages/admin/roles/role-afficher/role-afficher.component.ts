import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-role-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './role-afficher.component.html',
  styleUrl: './role-afficher.component.css'
})
export class RoleAfficherComponent implements OnInit {

  roles: any[] = [];
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  ngOnInit(): void {
    this.Afficher_role();
  }

  Afficher_role() {
    this.groupeService.Read_role().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.roles = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.roles = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Supprimer_role(id: number) {
    this.groupeService.Delete_role(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_role();
    });
  }


  Modifier_role(id: number) {
    this.router.navigate(['/role_modifier', id]);
  }
}
