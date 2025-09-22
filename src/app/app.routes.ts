import { Routes } from '@angular/router';
import { Signup } from './components/signup/signup.component';
import { Signin } from './components/signin/signin.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { NotFound } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: "signup",
        component: Signup
    },
    {
        path: "signin",
        component: Signin
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'notfound',
        component: NotFound,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'notfound'
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];