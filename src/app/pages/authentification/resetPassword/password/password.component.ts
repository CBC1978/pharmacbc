import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserServiceService } from '../../../../services/authService/user-service.service';
import { error } from 'node:console';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserServiceService) { }
  resetPassword!: FormGroup;
  message: string = '';
  ngOnInit():void {
    this.initForm();
  }

  initForm() {
    this.resetPassword = this.formBuilder.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Reset_Password() {
    if (this.resetPassword.valid) {
      this.userService.Reset_password(this.resetPassword.value).subscribe(
        response => {
          console.log(response); // Affiche les données reçues depuis l'API
          if (response.message == 'Email invalide.') {
            this.message = response.message;
          } else {
            this.router.navigateByUrl('');
          }
      },
      error =>{
        console.error(error);
        // Gestion de l'erreur en cas de problème de connexion
        this.message = error.error.message;
      }
    );
      
    } else {
      this.displayFormErrors();
    }
    
  }

  displayFormErrors() {
    Object.keys(this.resetPassword.controls).forEach(field => {
      const control = this.resetPassword.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }


}
