import { Component } from '@angular/core';
import { UserServiceService } from '../../../../services/authService/user-service.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-utilisateur-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './utilisateur-modifier.component.html',
  styleUrl: './utilisateur-modifier.component.css'
})
export class UtilisateurModifierComponent {
  userForm!: FormGroup;
  user_id!:any;
  user!:any;
  sites: any[] = [];
  fonctions: any[] = [];
  selectedRole!: string;
  selectedFonction!: number;
  selectedSite!: number;

  constructor(private router: Router,  private userService: UserServiceService, private route:ActivatedRoute, private groupeService : GroupeServiceService) { }

  ngOnInit(){
    this.user_id=this.route.snapshot.paramMap.get('id');
    this.userService.Get_user_id(this.user_id).subscribe(res=>{
        this.user = res.data;
        console.log('user :', this.user)
   });
   this.Afficher_fonction();
   this.Afficher_site();
  }

  

  Save_updated() {

    this.userService.Updated_user(this.user.id, this.user).subscribe(response => {
      
      console.log('user modifiée avec succès ', response);
      this.router.navigateByUrl('afficher_utilisateur');
    }); 
  }

  Afficher_site() {
    this.groupeService.Read_site().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.sites = response.data;
    }); 
  }
  Afficher_fonction() {
    this.groupeService.Read_fontion().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.fonctions = response.data;
    }); 
  }

}
