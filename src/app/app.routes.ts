import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentification/login/login.component';
import { SidebarAdminComponent } from './pages/sidebar/sidebar-admin/sidebar-admin.component';
import { FonctionAjouterComponent } from './pages/admin/fontions/fonction-ajouter/fonction-ajouter.component';
import { FonctionAfficherComponent } from './pages/admin/fontions/fonction-afficher/fonction-afficher.component';
import { FonctionModifierComponent } from './pages/admin/fontions/fonction-modifier/fonction-modifier.component';
import { RoleModifierComponent } from './pages/admin/roles/role-modifier/role-modifier.component';
import { RoleAfficherComponent } from './pages/admin/roles/role-afficher/role-afficher.component';
import { RoleAjouterComponent } from './pages/admin/roles/role-ajouter/role-ajouter.component';
import { SiteModifierComponent } from './pages/admin/sites/site-modifier/site-modifier.component';
import { SiteAjouterComponent } from './pages/admin/sites/site-ajouter/site-ajouter.component';
import { SiteAfficherComponent } from './pages/admin/sites/site-afficher/site-afficher.component';
import { PermissionAfficherComponent } from './pages/admin/permissions/permission-afficher/permission-afficher.component';
import { ExerciceAjouterComponent } from './pages/comptable/exercices/exercice-ajouter/exercice-ajouter.component';
import { ExerciceAfficherComponent } from './pages/comptable/exercices/exercice-afficher/exercice-afficher.component';
import { ExerciceModifierComponent } from './pages/comptable/exercices/exercice-modifier/exercice-modifier.component';
import { ConsultationAfficherComponent } from './pages/comptable/consultations/consultation-afficher/consultation-afficher.component';
import { RemboursementConsultationAfficherComponent } from './pages/comptable/Remboursement/remboursement-consultation-afficher/remboursement-consultation-afficher.component';
import { SidebarUserComponent } from './pages/sidebar/sidebar-user/sidebar-user.component';
import { DemandeAfficherComponent } from './pages/user/DemandeConsultation/demande-afficher/demande-afficher.component';
import { DemandeAjouterComponent } from './pages/user/DemandeConsultation/demande-ajouter/demande-ajouter.component';
import { DemandeModifierComponent } from './pages/user/DemandeConsultation/demande-modifier/demande-modifier.component';
import { AssignerPermssionComponent } from './pages/admin/roles/assigner-permssion/assigner-permssion.component';
import { UtilisateurAjouterComponent } from './pages/admin/user/utilisateur-ajouter/utilisateur-ajouter.component';
import { UtilisateurAfficherComponent } from './pages/admin/user/utilisateur-afficher/utilisateur-afficher.component';
import { UtilisateurModifierComponent } from './pages/admin/user/utilisateur-modifier/utilisateur-modifier.component';
import { AfficherProfilComponent } from './pages/user/profil/afficher-profil/afficher-profil.component';
import { PharmacieAfficherComponent } from './pages/comptable/pharmacies/pharmacie-afficher/pharmacie-afficher.component';
import { RemboursementPharmacieAfficherComponent } from './pages/comptable/Remboursement/remboursement-pharmacie-afficher/remboursement-pharmacie-afficher.component';
import { PharmacieAjouterComponent } from './pages/user/DemandePharmacie/pharmacie-ajouter/pharmacie-ajouter.component';
import { PharmacieModifierComponent } from './pages/user/DemandePharmacie/pharmacie-modifier/pharmacie-modifier.component';
import { EmailComponent } from './pages/authentification/resetPassword/email/email.component';
import { PasswordComponent } from './pages/authentification/resetPassword/password/password.component';
import { ModifierPasswordComponent } from './pages/user/profil/modifier-password/modifier-password.component';
import { DasboardComponent } from './pages/sidebar/dasboard/dasboard.component';
import { PharmacieAfficherUserComponent } from './pages/user/DemandePharmacie/pharmacie-afficher-user/pharmacie-afficher-user.component';
import { HistoriqueAfficherComponent } from './pages/admin/historique/historique-afficher/historique-afficher.component';
import { EtatAjouterComponent } from './pages/comptable/Etat/Consultation/etat-ajouter/etat-ajouter.component';
import { EtatAfficherComponent } from './pages/comptable/Etat/Consultation/etat-afficher/etat-afficher.component';
import { EtatRemboursementComponent } from './pages/comptable/Etat/Consultation/etat-remboursement/etat-remboursement.component';
import { EtatPharmacieAjouterComponent } from './pages/comptable/Etat/Pharmacie/etat-pharmacie-ajouter/etat-pharmacie-ajouter.component';
import { EtatPharmacieAfficherComponent } from './pages/comptable/Etat/Pharmacie/etat-pharmacie-afficher/etat-pharmacie-afficher.component';
import { EtatPharmacieRembComponent } from './pages/comptable/Etat/Pharmacie/etat-pharmacie-remb/etat-pharmacie-remb.component';
import { AccueilComponent } from './pages/sidebar/accueil/accueil.component';


export const routes: Routes = [
    // Les routes pour les fonctions
    { path:'', title:'home',component:AccueilComponent},
    { path:'login', title:'home',component:LoginComponent},

    { path:'dashboard_admin', title:'Dashboard admin',component:SidebarAdminComponent},
    { path:'dashboard', title:'Dashboard admin',component:DasboardComponent},
    { path:'fonction_ajouter', title:'Ajouter une fonction',component:FonctionAjouterComponent},
    { path:'fonction_afficher', title:'Afficher une fonction',component:FonctionAfficherComponent},
    { path:'fonction_modifier/:id', component:FonctionModifierComponent},

    // Les routes pour les rôles
    { path:'role_ajouter', title:'Ajouter une role',component:RoleAjouterComponent},
    { path:'role_afficher', title:'Afficher une role',component:RoleAfficherComponent},
    { path:'assigner_permission', title:'Afficher une role',component:AssignerPermssionComponent},
    { path:'role_modifier/:id', component:RoleModifierComponent},


    // Les routes pour les sites
    { path:'site_ajouter', title:'Ajouter une site',component:SiteAjouterComponent},
    { path:'site_afficher', title:'Afficher une site',component:SiteAfficherComponent},
    { path:'site_modifier/:id', component:SiteModifierComponent},
    

    // Route pour afficher les permissions
    { path:'permission_afficher', title:'Afficher une permission',component:PermissionAfficherComponent},

    // Les routes pour les utilisateurs
    {path:'ajouter_utilisateur', component:UtilisateurAjouterComponent},
    {path:'afficher_utilisateur', component:UtilisateurAfficherComponent},
    {path:'Profil_utilisateur', component:AfficherProfilComponent},
    {path:'user_modifier/:id', component:UtilisateurModifierComponent},
    {path:'reset_email', component:EmailComponent},
    {path:'reset_password', component:PasswordComponent},
    {path:'modifier_password', component:ModifierPasswordComponent},



    // Route pour les exercice
    { path:'exercice_ajouter', title:'Afficher une permission',component:ExerciceAjouterComponent},
    { path:'exercice_afficher', title:'Afficher une permission',component:ExerciceAfficherComponent},
    { path:'exercice_modifier/:id', component:ExerciceModifierComponent},


    // Les routes pour les demandes de remboursement pour les frais médicaux
    { path:'consultation_afficher_comptable', title:'Afficher une permission',component:ConsultationAfficherComponent},

    // Les routes pour les demandes de remboursement pour la pharmacie
    { path:'pharmacie_afficher_comptable', title:'Afficher une permission',component:PharmacieAfficherComponent},


    // Les routes pour le remboursement des demandes de consultation 
    {path:'remboursement_consultation',component:RemboursementConsultationAfficherComponent},

    // Les routes pour le remboursement des demandes de pharmacie 
    {path:'remboursement_pharmacie',component:RemboursementPharmacieAfficherComponent},


    // Les routes pour le sidebar utilisateurs
    {path:'siderbar_demande_consultation', component:SidebarUserComponent},

    // Les routes pour les utilisateurs, demande de remboursement pour la consultation
    {path:'afficher_demande_consultation', component:DemandeAfficherComponent},
    {path:'ajouter_demande_consultation', component:DemandeAjouterComponent},
    {path:'consultation_modifier/:id', component:DemandeModifierComponent},


    // Les routes pour les utilisateurs, demande de remboursement pour la pharmacie
    {path:'afficher_demande_pharmacie', component:PharmacieAfficherUserComponent},
    {path:'ajouter_demande_pharmacie', component:PharmacieAjouterComponent},
    {path:'pharmacie_modifier/:id', component:PharmacieModifierComponent},


    // Routes pour affcher les historiques
    {path:'historique_afficher', component:HistoriqueAfficherComponent},

    // Les routes pour les états de la consultation
    {path:'etat_create', component:EtatAjouterComponent},
    {path:'etat_afficher', component:EtatAfficherComponent},
    { path:'etat_id/:id', component:EtatRemboursementComponent}, 


    // Les routes pour les états de la pharmacie
    {path:'etat_create_pharmacie', component:EtatPharmacieAjouterComponent},
    {path:'etat_afficher_pharmacie', component:EtatPharmacieAfficherComponent},
    { path:'etat_id_pharmacie/:id', component:EtatPharmacieRembComponent}




];
