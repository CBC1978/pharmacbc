import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceServiceService } from '../../../../services/exerciceService/exercice-service.service';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-modifier',
  standalone: true,
  imports: [SidebarAdminComponent,CommonModule,FormsModule],
  templateUrl: './exercice-modifier.component.html',
  styleUrl: './exercice-modifier.component.css'
})
export class ExerciceModifierComponent {
  exercice_id!:any;
  exercice!:any;

  constructor(private router: Router,  private exerciceService: ExerciceServiceService, private route:ActivatedRoute,) { }

  ngOnInit(){
    this.exercice_id=this.route.snapshot.paramMap.get('id');
    this.exerciceService.Get_exercice_id(this.exercice_id).subscribe(res=>{
        this.exercice = res.data;
        console.log('exercice :', this.exercice)
   });
  }

  

  Save_updated() {

    this.exerciceService.Updated_exercice(this.exercice.id, this.exercice).subscribe(response => {
      
      console.log('exercice modifiée avec succès ', response);
      this.router.navigateByUrl('exercice_afficher'); 
     
    });
    
  }
}
