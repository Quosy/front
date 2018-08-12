import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
   

// otherwise redirect to home
// { path: '404', component:  },
{ path: '**', redirectTo: 'login' }

];

export const routing = RouterModule.forRoot(appRoutes);


