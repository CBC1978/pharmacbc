import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-permission-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './permission-afficher.component.html',
  styleUrl: './permission-afficher.component.css'
})
export class PermissionAfficherComponent implements OnInit {

  permissions: any[] = [];
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  ngOnInit(): void {
    this.Afficher_permission();
  }

  Afficher_permission() {
    this.groupeService.Read_permission().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.permissions = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.permissions = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }
}
