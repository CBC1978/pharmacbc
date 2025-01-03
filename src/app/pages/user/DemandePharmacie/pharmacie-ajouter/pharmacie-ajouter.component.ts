import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacieServiceService } from '../../../../services/pharmacieService/pharmacie-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-pharmacie-ajouter',
  standalone: true,
  imports: [SidebarAdminComponent, FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './pharmacie-ajouter.component.html',
  styleUrl: './pharmacie-ajouter.component.css'
})
export class PharmacieAjouterComponent {
  pharmacieForm!: FormGroup;
  message: string = '';
  mess: string = '';
  sites: any[] = [];
  selectedSite!: number;
  constructor(private router: Router, private formBuilder: FormBuilder, private pharmacieService: PharmacieServiceService, private groupeService: GroupeServiceService) { }

  ngOnInit():void {
    this.initForm();
    this.Afficher_site();
  }

  initForm() {
    this.pharmacieForm = this.formBuilder.group({
      commentaire        : [''],
      site_id            : [''],
      montant_demande    : ['', Validators.required],
    });
  }

  Ajouter_pharmacie() {
    if (this.pharmacieForm.valid) {
      this.pharmacieService.Create_pharmacie(this.pharmacieForm.value).subscribe(response => {
        console.log(response); // Affiche les données reçues depuis l'API
        this.mess = response.message
        setTimeout(() => {
          this.pharmacieForm.reset();
          this.mess = '';
        },2000);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        // Vérifiez si le statut est 422 et si le message est présent
        if (error.status === 422 && error.error.message) {
          
            this.message = error.error.message;
  
        } else {
          
        }
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    ); 
      
    }else {
      this.displayFormErrors();
    }
  
  }
  displayFormErrors() {
    Object.keys(this.pharmacieForm.controls).forEach(field => {
      const control = this.pharmacieForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  Afficher_site() {
    this.groupeService.Read_user_site().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.sites = response.sites_user;
    }); 
  }
}
