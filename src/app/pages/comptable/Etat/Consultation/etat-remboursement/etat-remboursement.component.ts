import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceServiceService } from '../../../../../services/exerciceService/exercice-service.service';
import { SidebarAdminComponent } from '../../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-etat-remboursement',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './etat-remboursement.component.html',
  styleUrl: './etat-remboursement.component.css'
})
export class EtatRemboursementComponent {
  etat_id!:any;
  etats: any[] = [];

  constructor(private router: Router,  private etatService: ExerciceServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.etat_id=this.route.snapshot.paramMap.get('id');
    this.etatService.Get_etat_id_consultation(this.etat_id).subscribe(res=>{
        console.log('etats :', res.data)
   });
   this.Afficher_etat_remb();
  }

  handleSearchResults(results: any[]){
    this.etats = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Afficher_etat_remb() {
    this.etatService.Read_etat_remboursement_consultation(this.etat_id).subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.etats = response.data;  
    });
  }

  pdf_etat(): void {
    this.etatService.Generate_pdf_etat_consultation(this.etat_id).subscribe((data: Blob) => {
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

}
