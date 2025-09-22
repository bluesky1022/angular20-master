import { Routes } from '@angular/router';
import { Signup } from './components/signup/signup.component';
import { Signin } from './components/signin/signin.component';

export const routes: Routes = [
    {
        path: "signup",
        component: Signup
    },
    {
        path: "signin",
        component: Signin
    }
];
