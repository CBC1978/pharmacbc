import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationServiceService } from '../../../../services/consultatonService/consultation-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demande-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './demande-modifier.component.html',
  styleUrl: './demande-modifier.component.css'
})
export class DemandeModifierComponent {
  consultation_id!:any;
  consultation!:any;
  message: string = '';

  constructor(private router: Router,  private consultationService: ConsultationServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.consultation_id=this.route.snapshot.paramMap.get('id');
    this.consultationService.Get_consultation_id(this.consultation_id).subscribe(res=>{
        this.consultation = res.data;
        console.log('consultation :', this.consultation)
   }
  );
  }

  

  Save_updated() {
    this.consultationService.Updated_consultation(this.consultation.id, this.consultation).subscribe(response => {
      console.log( response); 
      if(response.message != 'Veuillez entrez un montant inférieur ou égal à votre solde'){
        this.router.navigateByUrl('afficher_demande_consultation');
      }
    },
    (error: HttpErrorResponse) => {
      console.error(error);
      // Vérifiez si le statut est 422 et si le message est présent
      if (error.status === 422 && error.error.message === 'Veuillez entrez un montant inférieur ou égal à votre solde') {
          
          this.message = error.error.message;
  
      } else {
        
      }
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }); 
  }

}
