import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder, private consultationService: ConsultationServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.consultationForm = this.formBuilder.group({
      libelle            : ['', Validators.required],
      description        : ['', Validators.required],
      montant_demande    : ['', Validators.required],
    });
  }

  Ajouter_consultation() {
    if (this.consultationForm.valid) {
      this.consultationService.Create_consultation(this.consultationForm.value).subscribe(response => {
        alert(response.message);
        console.log(response); // Affiche les données reçues depuis l'API
        setTimeout(() => {
          this.consultationForm.reset();
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
        }, 3000);
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
}
