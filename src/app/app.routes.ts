import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ResumeComponent } from './features/resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
];
