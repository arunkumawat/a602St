import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin.component';
import { LoginComponent } from './components/login.component';
import { AuthGuard } from './service/auth.guard';

import { HomeComponent } from './components/home.component';

const appRouter: Routes =
    [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },

        { path: 'admin/page', component: AdminComponent, canActivate: [AuthGuard] },
        { path: 'home', component: HomeComponent }
//        { path: 'noAccess', component: NoAccessComponent },
//        { path: '**', component: PageNotFoundComponent }
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);