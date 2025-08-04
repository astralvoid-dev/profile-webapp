import { Routes } from '@angular/router';
import { ProfileStartpage } from './profile-startpage/profile-startpage';

export const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: ProfileStartpage }
];
