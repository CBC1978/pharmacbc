import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceServiceService } from '../../../../../services/exerciceService/exercice-service.service';
import { SidebarAdminComponent } from '../../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-etat-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './etat-afficher.component.html',
  styleUrl: './etat-afficher.component.css'
})
export class EtatAfficherComponent implements OnInit {

  etats: any[] = [];

  etat!:any;
  constructor(private router: Router,private etatService: ExerciceServiceService) { }
  ngOnInit(): void {
    this.Afficher_etat();
  }

  Afficher_etat() {
    this.etatService.Read_etat_consultation().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.etats = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.etats = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }



  pdf_etat(id : number): void {
    this.etatService.Generate_pdf_etat_consultation(id).subscribe((data: Blob) => {
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

  etat_ids(id: number) {
    this.router.navigate(['/etat_id', id]);
  }

}
