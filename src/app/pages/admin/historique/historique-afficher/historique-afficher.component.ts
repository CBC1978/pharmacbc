import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-historique-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './historique-afficher.component.html',
  styleUrl: './historique-afficher.component.css'
})
export class HistoriqueAfficherComponent implements OnInit {

  historiques: any[] = []; 
   constructor(private groupeService: GroupeServiceService) { }
   ngOnInit(): void {
     this.Afficher_historique();
   }

   Afficher_historique() {
     this.groupeService.Read_historique().subscribe(response => {
       console.log(response); // Affiche les données reçues depuis l'API
       this.historiques = response.data;
     }); 
   }

}
