import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ExerciceServiceService } from '../../../../../services/exerciceService/exercice-service.service';
import { SidebarAdminComponent } from '../../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-etat-ajouter',
  standalone: true,
  imports: [SidebarAdminComponent,FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './etat-ajouter.component.html',
  styleUrl: './etat-ajouter.component.css'
})
export class EtatAjouterComponent {
  etatForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private etatService: ExerciceServiceService) { }

    ngOnInit():void {
      this.initForm();
    }

    initForm() {
      this.etatForm = this.formBuilder.group({
        date_debut         : ['', Validators.required],
        date_fin           : ['', Validators.required]
      });
    }

    Ajouter_etat() {
      if(this.etatForm.valid){
        this.etatService.Create_etat(this.etatForm.value).subscribe(response => {
           // Affiche les données reçues depuis l'API
          console.log(response);  
          setTimeout(() => {
            this.etatForm.reset();
          },2000);
        }); 

      }else {
        this.displayFormErrors();
      }

    }
    displayFormErrors() {
      Object.keys(this.etatForm.controls).forEach(field => {
        const control = this.etatForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
 }

