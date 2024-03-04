import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogicComponent } from './login/login.component';
import { IsAuthGuard } from './guards/guard';

// Configuring Angular routes
export const routes: Routes = [
  {
    // Redirecting to '/home' when the path is empty
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // Activating the 'IsAuthGuard' to check if the user is authenticated before accessing the 'home' component
    canActivate: [IsAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LogicComponent
  }
];
