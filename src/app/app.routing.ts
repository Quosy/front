import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuosyComponent } from './pages/quosy/quosy.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'quosy', component: QuosyComponent },
   

// otherwise redirect to home
// { path: '404', component:  },
{ path: '**', redirectTo: 'login' }

];

export const routing = RouterModule.forRoot(appRoutes);


