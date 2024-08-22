import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-demande-ajouter',
  standalone: true,
  imports: [SidebarAdminComponent, FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './demande-ajouter.component.html',
  styleUrl: './demande-ajouter.component.css'
})
export class DemandeAjouterComponent {
  consultationForm!: FormGroup;
  message: string = '';
  sites: any[] = [];
  selectedSite!: number;

  constructor(private formBuilder: FormBuilder, private consultationService: ConsultationServiceService, private groupeService: GroupeServiceService) { }

  ngOnInit():void {
    this.initForm();
    this.Afficher_site();
  }

  initForm() {
    this.consultationForm = this.formBuilder.group({
      libelle            : [''],
      site_id            : [''],
      montant_demande    : ['', Validators.required],
    });
  }

  Ajouter_consultation() {
    if (this.consultationForm.valid) {
      this.consultationService.Create_consultation(this.consultationForm.value).subscribe(response => {
        console.log(response); // Affiche les données reçues depuis l'API
        setTimeout(() => {
          this.consultationForm.reset();
        },5000);
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
    Object.keys(this.consultationForm.controls).forEach(field => {
      const control = this.consultationForm.get(field);
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
