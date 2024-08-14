import { isPlatformBrowser } from '@angular/common';
import {  AfterViewInit, Component, ElementRef, Inject,  PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart, registerables, ChartOptions, ChartData, ChartDataset, } from 'chart.js';
import { SidebarAdminComponent } from '../../../sidebar/sidebar-admin/sidebar-admin.component';
Chart.register(...registerables);

@Component({
  selector: 'app-modifier-password',
  standalone: true,
  imports: [SidebarAdminComponent],
  templateUrl: './modifier-password.component.html',
  styleUrl: './modifier-password.component.css'
})
export class ModifierPasswordComponent implements AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const ctx = this.myChart.nativeElement.getContext('2d');
      if (ctx) {
        const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#177dff');
        gradientStroke.addColorStop(1, '#80b6f4');

        const gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill.addColorStop(0, 'rgba(23, 125, 255, 0.7)');
        gradientFill.addColorStop(1, 'rgba(128, 182, 244, 0.3)');

        const gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke2.addColorStop(0, '#f3545d');
        gradientStroke2.addColorStop(1, '#ff8990');

        const gradientFill2 = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill2.addColorStop(0, 'rgba(243, 84, 93, 0.7)');
        gradientFill2.addColorStop(1, 'rgba(255, 137, 144, 0.3)');

        const gradientStroke3 = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke3.addColorStop(0, '#fdaf4b');
        gradientStroke3.addColorStop(1, '#ffc478');

        const gradientFill3 = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill3.addColorStop(0, 'rgba(253, 175, 75, 0.7)');
        gradientFill3.addColorStop(1, 'rgba(255, 196, 120, 0.3)');

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Subscribers',
                borderColor: gradientStroke2,
                pointBackgroundColor: gradientStroke2,
                pointRadius: 0,
                backgroundColor: gradientFill2,
                fill: true,
                borderWidth: 1,
                data: [154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374],
              },
              {
                label: 'New Visitors',
                borderColor: gradientStroke3,
                pointBackgroundColor: gradientStroke3,
                pointRadius: 0,
                backgroundColor: gradientFill3,
                fill: true,
                borderWidth: 1,
                data: [256, 230, 245, 287, 240, 250, 230, 295, 331, 431, 456, 521],
              },
              {
                label: 'Active Users',
                borderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointRadius: 0,
                backgroundColor: gradientFill,
                fill: true,
                borderWidth: 1,
                data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // Masquer la légende par défaut
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                  },
                },
              },
            },
            scales: {
              y: {
                ticks: {
                  color: 'rgba(0,0,0,0.5)',
                  font: {
                    weight: 500,
                  },
                  maxTicksLimit: 5,
                  padding: 20,
                },
                grid: {
                  drawTicks: false,
                  display: false,
                },
              },
              x: {
                grid: { color: 'transparent' },
                ticks: {
                  padding: 20,
                  color: 'rgba(0,0,0,0.5)',
                  font: {
                    weight: 500,
                  },
                },
              },
            },
          },
        });
      }
    }
  }
}
