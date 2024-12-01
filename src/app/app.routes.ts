import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuardFn] }, // Proteção ativada aqui
    { path: 'video/:id', component: VideoComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: 'login' }
];
