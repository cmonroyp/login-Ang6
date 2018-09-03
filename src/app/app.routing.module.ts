import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//componentes

import { LoginComponent } from './login/login.component';

//guard
import { AuthGuard } from './auth.guard';


const routes : Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})


export class AppRoutingModule{}