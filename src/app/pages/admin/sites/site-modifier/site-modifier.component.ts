import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeServiceService } from '../../../../services/groupeService/groupe-service.service';

@Component({
  selector: 'app-site-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './site-modifier.component.html',
  styleUrl: './site-modifier.component.css'
})
export class SiteModifierComponent {
  site_id!:any;
  site!:any;

  constructor(private router: Router,  private siteService: GroupeServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.site_id=this.route.snapshot.paramMap.get('id');
    this.siteService.Get_site_id(this.site_id).subscribe(res=>{
        this.site = res.data;
        console.log('site :', this.site)
   });
  }

  

  Save_updated() {

    this.siteService.Updated_site(this.site.id, this.site).subscribe(response => {
      
      console.log('site modifiée avec succès ', response);
      this.router.navigateByUrl('site_afficher'); 
     
    });
    
  }

}
