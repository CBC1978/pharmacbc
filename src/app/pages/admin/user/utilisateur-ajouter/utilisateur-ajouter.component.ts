import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { UserServiceService } from '../../../../services/authService/user-service.service';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-utilisateur-ajouter',
  standalone: true,
  imports: [SidebarAdminComponent,FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './utilisateur-ajouter.component.html',
  styleUrl: './utilisateur-ajouter.component.css'
})
export class UtilisateurAjouterComponent {
  userForm!: FormGroup;
  roles: any[] = [];
  sitess: any[] = [];
  fonctions: any[] = [];
  selectedRole!: string;
  selectedFonction!: number;
  selectedSite!: number;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserServiceService, private groupeService : GroupeServiceService ) { }

  ngOnInit():void {
    this.initForm();
    this.Afficher_role();
    this.Afficher_fonction();
    this.Afficher_site();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      matricule     : ['', Validators.required],
      nom           : ['', Validators.required],
      prenom        : ['', Validators.required],
      email         : ['', Validators.required],
      role          : ['', Validators.required],
      fonction_id   : ['', Validators.required],
      sites         : this.formBuilder.array([this.createSiteSelection()])
    });
  }

  createSiteSelection(): FormGroup {
    return this.formBuilder.group({
      site_id: ['', Validators.required]
    });
  }

  get sites() {
    return this.userForm.get('sites') as FormArray;
  }

  addSiteSelection() {
    this.sites.push(this.createSiteSelection());
  }

  removeSiteSelection(index: number) {
    this.sites.removeAt(index);
  }
  Ajouter_user() {
    if(this.userForm.valid){
      this.userService.register(this.userForm.value).subscribe(response => {
         // Affiche les données reçues depuis l'API
        console.log(response);  
        setTimeout(() => {
          this.userForm.reset();
        },2000);
      }); 

    }else {
      this.displayFormErrors();
    }

  }
  displayFormErrors() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }



  Afficher_role() {
    this.groupeService.Read_role().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.roles = response.data;
    }); 
  }

  Afficher_site() {
    this.groupeService.Read_site().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.sitess = response.data;
    }); 
  }
  Afficher_fonction() {
    this.groupeService.Read_fontion().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.fonctions = response.data;
    }); 
  }


}
