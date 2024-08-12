import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fonction-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './fonction-modifier.component.html',
  styleUrl: './fonction-modifier.component.css'
})
export class FonctionModifierComponent {
  fonction_id!:any;
  fonction!:any;

  constructor(private router: Router,  private fonctionService: GroupeServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.fonction_id=this.route.snapshot.paramMap.get('id');
    this.fonctionService.Get_fonction_id(this.fonction_id).subscribe(res=>{
        this.fonction = res.data;
        console.log('Fonction :', this.fonction)
   });
  }

  

  Save_updated() {

    this.fonctionService.Updated_fonction(this.fonction.id, this.fonction).subscribe(response => {
      
      console.log(response);
      this.router.navigateByUrl('fonction_afficher');
     
    });
    
  }

}
