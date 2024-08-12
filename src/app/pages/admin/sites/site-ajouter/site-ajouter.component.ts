import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-site-ajouter',
  standalone: true,
  imports:  [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule,SidebarAdminComponent],
  templateUrl: './site-ajouter.component.html',
  styleUrl: './site-ajouter.component.css'
})
export class SiteAjouterComponent {
  siteForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private groupeService: GroupeServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.siteForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    });
  }

  Ajouter_site() {
    if (this.siteForm.valid) {
      this.groupeService.Create_site(this.siteForm.value).subscribe(
        async(res) =>{
          this.initForm();
          setTimeout(() => {
            this.siteForm.reset();
          },2000);
        },
        async (err: any)=>{
          console.log("Une erreur est survenue", err);
        }
      )
      
    }  else {
      this.displayFormErrors();
    }
  
  }

  displayFormErrors() {
    Object.keys(this.siteForm.controls).forEach(field => {
      const control = this.siteForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
