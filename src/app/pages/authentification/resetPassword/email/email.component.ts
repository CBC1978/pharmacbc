import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { UserServiceService } from '../../../../services/authService/user-service.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule,SidebarAdminComponent],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
emailForm!: FormGroup;

  message: string = ''
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  Verifier_email() {
    if (this.emailForm.valid) {
      this.userService.Check_email(this.emailForm.value).subscribe(
        response => {
          console.log(response); // Affiche les données reçues depuis l'API
          if (response.mesage =='Adresse email non trouvé.') {
            this.message = response.message ;
          } else {           
            this.router.navigateByUrl('reset_password');
          }
        }, 
        error => {
        console.error(error);
        // Gestion de l'erreur en cas de problème de connexion
        this.message = error.error.message;
      }
    );
    }  else {
      this.displayFormErrors();
    }
    
  }

  displayFormErrors() {
    Object.keys(this.emailForm.controls).forEach(field => {
      const control = this.emailForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }


}
