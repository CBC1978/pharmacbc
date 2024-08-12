import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fonction-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './fonction-afficher.component.html',
  styleUrl: './fonction-afficher.component.css'
})
export class FonctionAfficherComponent implements OnInit {

 fonctions: any[] = []; 
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  ngOnInit(): void {
    this.Afficher_fontion();
  }

  Afficher_fontion() {
    this.groupeService.Read_fontion().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.fonctions = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.fonctions = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Supprimer_fonction(id: number) {
    this.groupeService.Delete_fontion(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_fontion();
    });
  }


  Modifier_fonction(id: number) {
    this.router.navigate(['/fonction_modifier', id]);
  }

  

}
