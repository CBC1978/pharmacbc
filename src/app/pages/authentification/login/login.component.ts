import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserServiceService } from '../../../services/authService/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink,RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userConnect!: FormGroup;
  permissions: any[] = [];
  message: string = '';


  constructor( @Inject(PLATFORM_ID)private platformId:object, private router:Router,private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.userConnect = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    if (this.userConnect && this.userConnect.valid) {
      this.userService.login(this.userConnect.value).subscribe(
        response => {
          console.log(response);
          this.permissions = response.permissions
          if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('token' ,response.token)
            console.log('Token bien recuperer',response.token)
            this.message = response.message;
          }
          if (response.message =='connecté') {  
            this.message = response.message;
            this.router.navigateByUrl('dashboard'); 
          } else {
            // Gérer les cas où la connexion n'est pas réussie
            this.message = response.message ;
          }
        },
        error => {
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
    Object.keys(this.userConnect.controls).forEach(field => {
      const control = this.userConnect.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
