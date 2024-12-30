import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../../services/authService/user-service.service';
import { formatNumber } from '../../../../../separateur';


@Component({
  selector: 'app-utilisateur-afficher',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './utilisateur-afficher.component.html',
  styleUrl: './utilisateur-afficher.component.css'
})
export class UtilisateurAfficherComponent implements OnInit {

  users: any[] = [];
  user!:any;
  constructor(private router: Router,  private userService: UserServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_user();
  }

  public formatNumber = formatNumber;

  Afficher_user() {
    this.userService.Read_users().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.users = response.data;
    }); 
  }

  handleSearchResults(results: any[]){
    this.users = results; // Met à jour les utilisateurs affichés avec les résultats de la recherche
  }

  Supprimer_user(id: number) {
    this.userService.Delete_user(id).subscribe(() => {
      // Rafraîchir la liste des contacts après la suppression
      this.Afficher_user();
    });
  }

  Modifier_user(id: number) {
    this.router.navigate(['/user_modifier', id]);
  }

}
