import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExerciceServiceService } from '../../../../services/exerciceService/exercice-service.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exercice-ajouter',
  standalone: true,
  imports: [SidebarAdminComponent,FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './exercice-ajouter.component.html',
  styleUrl: './exercice-ajouter.component.css'
})
export class ExerciceAjouterComponent {
  exerciceForm!: FormGroup;
  message: string ='';
  mess: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private exerciceService: ExerciceServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.exerciceForm = this.formBuilder.group({
      libelle            : ['', Validators.required],
      solde_pharmacie    : ['', Validators.required],
      solde_consultation : ['', Validators.required],
      date_debut         : ['', Validators.required],
      date_fin           : ['', Validators.required]
    });
  }

  Ajouter_exercice() {
    if(this.exerciceForm.valid){
      this.exerciceService.Create_exercice(this.exerciceForm.value).subscribe(response => {
         // Affiche les données reçues depuis l'API
        console.log(response); 
        this.message = response.message 
        setTimeout(() => {
          this.exerciceForm.reset();
        },2000);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        // Vérifiez si le statut est 422 et si le message est présent
        if (error.error.message) {
              
            this.mess = error.error.message;
      
        } else {
              
        }
    }); 

    }else {
      this.displayFormErrors();
    }

  }
  displayFormErrors() {
    Object.keys(this.exerciceForm.controls).forEach(field => {
      const control = this.exerciceForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
