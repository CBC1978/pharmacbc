import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { UserServiceService } from '../../../../services/authService/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';


@Component({
  selector: 'app-afficher-profil',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './afficher-profil.component.html',
  styleUrl: './afficher-profil.component.css'
})
export class AfficherProfilComponent implements OnInit {

  users: any[] = [];
  user!:any;
  old_password: string = '';
  new_password: string = '';

  constructor(private router: Router,  private userService: UserServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_user();
  }

  Afficher_user() {
    this.userService.Get_profile().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.user = response.data;
    }); 
  }


  User_saved() {

    this.userService.Updated_profil(this.user).subscribe(response => {
      
      console.log('Profil modifiée avec succès ', response);
     
    });
    
  }

  Password_saved() {
    const body = {
      oldPassword: this.old_password,
      newPassword: this.new_password
    };

    this.userService.Updated_password(this.old_password, this.new_password, body).subscribe(response => { 
      console.log('password modifiée avec succès ', response);
     
    });
    
  }

 

}
