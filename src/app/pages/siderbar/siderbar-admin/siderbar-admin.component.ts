import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-siderbar-admin',
  standalone: true,
  imports: [],
  templateUrl: './siderbar-admin.component.html',
  styleUrl: './siderbar-admin.component.css'
})
export class SiderbarAdminComponent {

  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  constructor(private router:Router){

  };
  Go_on_dashboard(){
    this.router.navigateByUrl('dashboard_User')
  }
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
