import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GroupeServiceService } from '../../../services/groupeService/groupe-service.service';
import { UserServiceService } from '../../../services/authService/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf ,FormsModule, NgFor,CommonModule],
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.css'
})
export class SidebarAdminComponent implements OnInit {

  permission_names: any[] = [];
  permissions: string[] = [];
  user!: any;

  current_page!: string;
  search_query: string = '';
  users: any[] = [];

  counts!: {
    unread_count: number;
    unread_notifications: any[];
  };

  @Output() searchPerformed: EventEmitter<any[]> = new EventEmitter();

  constructor(private router: Router,  private groupeService: GroupeServiceService, private userService: UserServiceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.Afficher_permission();
    this.Afficher_notications()
    this.current_page = this.route.snapshot.url[0].path;
  }

  Afficher_permission() {
    this.groupeService.Users_permissions().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
      this.permission_names = response.permissions;
      this.permissions = this.permission_names.map(p => p.name);
      this.user        = response.user;  
      console.log('nom permissions',this.permissions)
    }); 
  }

  Afficher_notications() {
    this.groupeService.Notifications_read().subscribe(response => {
      console.log(response, 'salut'); // Affiche les données reçues depuis l'API
      this.counts = response;
    }); 
  }


  Lire_notifications() {
    this.groupeService.Mark_read().subscribe(response => {
      console.log(response); // Affiche les données reçues depuis l'API
    }); 
  }

  Rechercher() {
    this.groupeService.Search(this.current_page, this.search_query).subscribe(response => {
       this.searchPerformed.emit(response.data); 
    }); 
  }
  setPage(page: string): void {
    this.current_page = page; // Définit la page actuelle pour la recherche
  }


  Logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigateByUrl('')
    });
  }

}
