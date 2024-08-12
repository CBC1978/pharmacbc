import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../services/groupeService/groupe-service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [SidebarAdminComponent, NgIf],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent implements OnInit {
  constructor(private router: Router,  private groupeService: GroupeServiceService) { }
  permissionNames: any[] = [];
  permissions: string[] = [];
  counts!: {
    consultation: number;
    pharmacie: number;
    role: number;
    user: any;
    userCount: number;
  };
  
  ngOnInit(): void {
    this.Afficher_nombre();
    this.Afficher_permission();
  }

  Afficher_nombre() {
    this.groupeService.Get_number().subscribe(response => {
      console.log(response, 'salut'); // Affiche les données reçues depuis l'API
      this.counts = response;
    }); 
  }

  Afficher_permission() {
    this.groupeService.Users_permissions().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.permissionNames = response.permissions;
      this.permissions = this.permissionNames.map(p => p.name); 
      console.log('nom permissions',this.permissions)
    }); 
  }


 
  
}
