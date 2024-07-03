import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentification/login/login.component';
import { SiderbarAdminComponent } from './pages/siderbar/siderbar-admin/siderbar-admin.component';
import { DashboardComponent } from './pages/user_pages/dashboard/dashboard.component';
import { PharmacieAjouterComponent } from './pages/user_pages/pharmacie-ajouter/pharmacie-ajouter.component';
import { PharmacieModifierComponent } from './pages/user_pages/pharmacie-modifier/pharmacie-modifier.component';
import { MedicalAjouterComponent } from './pages/user_pages/medical-ajouter/medical-ajouter.component';
import { MedicalModifierComponent } from './pages/user_pages/medical-modifier/medical-modifier.component';
import { HistoriqueComponent } from './pages/user_pages/historique/historique.component';
import { MedicalAfficherComponent } from './pages/user_pages/medical-afficher/medical-afficher.component';
import { PharmacieAfficherComponent } from './pages/user_pages/pharmacie-afficher/pharmacie-afficher.component';
import { SiderbarUserComponent } from './pages/siderbar/siderbar-user/siderbar-user.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    }, 
    {
        path:'siderbar',
        component:SiderbarAdminComponent
    },
    {
        path:'siderbar_User',
        component:SiderbarUserComponent
    },

    {
        path:'dashboard_User',
        component:DashboardComponent
    },
    {
        path:'ajoute_pharmacie',
        component:PharmacieAjouterComponent
    },
    {
        path:'modifie_pharmacie',
        component:PharmacieModifierComponent
    },
    {
        path:'ajoute_medical',
        component:MedicalAjouterComponent
    },
    {
        path:'modifie_medical',
        component:MedicalModifierComponent
    },
    {
        path:'historique',
        component:HistoriqueComponent
    },
    {
        path:'affiche_medical',
        component:MedicalAfficherComponent
    },
    {
        path:'affiche_pharmacie',
        component:PharmacieAfficherComponent
    }

];
