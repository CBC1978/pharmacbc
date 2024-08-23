import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';


@Component({
  selector: 'app-fonction-ajouter',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule,SidebarAdminComponent],
  templateUrl: './fonction-ajouter.component.html',
  styleUrl: './fonction-ajouter.component.css'
})
export class FonctionAjouterComponent {
  fonctionForm!: FormGroup;
  message: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private groupeService: GroupeServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.fonctionForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    });
  }

  Ajouter_fonction() {
   if (this.fonctionForm.valid) {
    this.groupeService.Create_fonction(this.fonctionForm.value).subscribe(
      async(res) =>{
        this.initForm();
        setTimeout(() => {
          this.fonctionForm.reset();
        },2000);
      },
      async (err: any)=>{
        console.log("Une erreur est survenue", err);
      }
    )
    
   } else {
    this.displayFormErrors();
  }
  
}

displayFormErrors() {
  Object.keys(this.fonctionForm.controls).forEach(field => {
    const control = this.fonctionForm.get(field);
    control?.markAsTouched({ onlySelf: true });
  });
}

}
