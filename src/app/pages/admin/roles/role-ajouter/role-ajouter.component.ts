import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-role-ajouter',
  standalone: true,
  imports:  [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule,SidebarAdminComponent, NgIf],
  templateUrl: './role-ajouter.component.html',
  styleUrl: './role-ajouter.component.css'
})
export class RoleAjouterComponent {
  roleForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private groupeService: GroupeServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  Ajouter_role() {
    if (this.roleForm.valid) {
      this.groupeService.Create_role(this.roleForm.value).subscribe(
        async(res) =>{
          this.initForm();
          setTimeout(() => {
            this.roleForm.reset();
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
    Object.keys(this.roleForm.controls).forEach(field => {
      const control = this.roleForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
