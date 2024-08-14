import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-role-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './role-modifier.component.html',
  styleUrl: './role-modifier.component.css'
})
export class RoleModifierComponent {

  role_id!:any;
  role!:any;

  constructor(private router: Router,  private roleService: GroupeServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.role_id=this.route.snapshot.paramMap.get('id');
    this.roleService.Get_role_id(this.role_id).subscribe(res=>{
        this.role = res.data;
        console.log('role :', this.role)
   });
  }

  

  Save_updated() {

    this.roleService.Updated_role(this.role.id, this.role).subscribe(response => {
      
      console.log('role modifiée avec succès ', response);
      this.router.navigateByUrl('role_afficher'); 
    });
    
  }

}
