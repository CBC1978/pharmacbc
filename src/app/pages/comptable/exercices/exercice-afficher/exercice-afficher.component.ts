import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceServiceService } from '../../../../services/exerciceService/exercice-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { formatNumber } from '../../../../../separateur';

@Component({
  selector: 'app-exercice-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './exercice-afficher.component.html',
  styleUrl: './exercice-afficher.component.css'
})
export class ExerciceAfficherComponent implements OnInit {

  exercices: any[] = [];
  exercice!:any;
  constructor(private router: Router,  private exercieService: ExerciceServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_exercice();
  }

  Afficher_exercice() {
    this.exercieService.Read_exercice().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.exercices = response.data;
    }); 
  }

  public formatNumber = formatNumber;

  handleSearchResults(results: any[]){
    this.exercices = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }
  Supprimer_exercice(id: number) {
    this.exercieService.Delete_exercice(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_exercice();
    });
  }

  Cloturer_exercice(id: number) {
    this.exercieService.Cloturer_exercice(id, this.exercice).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_exercice();
    });
  }


  Modifier_exercice(id: number) {
    this.router.navigate(['/exercice_modifier', id]);
  }

}
