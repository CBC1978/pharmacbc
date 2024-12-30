import {  Component, EventEmitter, OnInit, Output,} from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';
import { NgIf } from '@angular/common';
import { Chart, registerables, ChartOptions, ChartData, ChartType  } from 'chart.js';
import { Router } from '@angular/router';
import { GroupeServiceService } from '../../../services/groupeService/groupe-service.service';
import { formatNumber } from '../../../../separateur';
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

  public formatNumber = formatNumber;
  counts!: {
    consultation: number;
    pharmacie: number;
    role: number;
    user: any;
    userCount: number;
  };
  public chart: any;
  private chartInitialized = false;
  
  ngOnInit(): void {
    this.Afficher_nombre();
    this.Afficher_permission();
    this.Creer_chart();
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
  @Output() toggleSidebarEvent = new EventEmitter<void>();



  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  isSidebarCollapsed = false;

  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  Creer_chart() {
    const ctx = document.getElementById('statisticsChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Solde pharmacie",
            borderColor: '#f3545d',
            pointBackgroundColor: 'rgba(243, 84, 93, 0.6)',
            pointRadius: 0,
            backgroundColor: 'rgba(243, 84, 93, 0.4)',
            fill: true,
            borderWidth: 2,
            data: [154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374]
          },
          {
            label: "solde frais médicaux",
            borderColor: '#177dff',
            pointBackgroundColor: 'rgba(23, 125, 255, 0.6)',
            pointRadius: 0,
            backgroundColor: 'rgba(23, 125, 255, 0.4)',
            fill: true,
            borderWidth: 2,
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
          }
        ]
      },

    });
  } 
}
