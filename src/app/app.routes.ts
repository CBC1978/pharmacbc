import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentification/login/login.component';
import { SiderbarAdminComponent } from './pages/siderbar/siderbar-admin/siderbar-admin.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    }, 
    {
        path:'siderbar',
        component:SiderbarAdminComponent
    }
];
