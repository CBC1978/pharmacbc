import { Component } from '@angular/core';
import { SiderbarAdminComponent } from '../../siderbar/siderbar-admin/siderbar-admin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SiderbarAdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){

  };
  Go_on_medical_affiche(){
    this.router.navigateByUrl('affiche_medical')
  }

  Go_on_medical_modifie(){
    this.router.navigateByUrl('modifie_medical')
  }
  Go_on_medical_ajoute(){
    this.router.navigateByUrl('ajoute_medical')
  }

  Go_on_pharmacie_affiche(){
    this.router.navigateByUrl('affiche_pharmacie')
  }

  Go_on_pharmacie_modifie(){
    this.router.navigateByUrl('modifie_pharmacie')
  }
  Go_on_pharmacie_ajoute(){
    this.router.navigateByUrl('ajoute_pharmacie')
  }
  Go_on_historique(){
    this.router.navigateByUrl('historique')
  }

}
