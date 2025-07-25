import { Routes } from '@angular/router';
import { ProfileWindow } from './profile-window/profile-window';
import { ProfileBio } from './profile-bio/profile-bio';

export const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: ProfileWindow },
    { path: 'bio', component: ProfileBio }
];
