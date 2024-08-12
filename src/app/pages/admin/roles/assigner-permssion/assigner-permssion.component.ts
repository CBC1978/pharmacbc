import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assigner-permssion',
  standalone: true,
  imports: [SidebarAdminComponent,ReactiveFormsModule, NgFor, NgIf, UpperCasePipe,FormsModule],
  templateUrl: './assigner-permssion.component.html',
  styleUrl: './assigner-permssion.component.css'
})
export class AssignerPermssionComponent {

  roles: any[] = [];
  permissions: any[] = [];
  role: any;
  selectedRoleId!: number;
  
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  ngOnInit(): void {
    this.Afficher_role();
    this.Afficher_permission()
  }




  Afficher_role() {
    this.groupeService.Read_role().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.roles = response.data;
    }); 
  }

  Afficher_permission() {
    this.groupeService.Read_permission().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.permissions = response.data;
    }); 
  }

  Etat_permission(permissionId: number, event: Event) {
    // Type assertion
    const target = event.target as HTMLInputElement; 
    const isChecked = target.checked;

    this.permissions = this.permissions.map(permission => 
      permission.id === permissionId ? { ...permission, selected: isChecked } : permission
    );

    console.log('Permissions après changement :', this.permissions);
  }


  Assigner_permission() {
    if (this.selectedRoleId) {
      const selectedPermissions = this.permissions
        .filter(permission => permission.selected)
        .map(permission => permission.id);

        console.log(this.selectedRoleId, selectedPermissions)

      this.groupeService.assignPermissions(this.selectedRoleId, selectedPermissions)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.error('Erreur lors de l\'assignation des permissions', error);
          }
        );
    } else {
      console.error('Veuillez sélectionner un rôle avant d\'assigner des permissions.');
    }
  }

  

}
