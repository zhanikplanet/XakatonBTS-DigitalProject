import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HashbackListComponent } from './components/hashback-list/hashback-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Sign in' },
  { path: 'registration', component: RegistrationComponent, title: 'Sign Up' },
  {
    path: 'hashback-list',
    component: HashbackListComponent,
    title: 'Hashback List',
  },
];
