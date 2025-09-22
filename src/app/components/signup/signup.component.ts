import { Component, Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
    imports: [FormsModule],
})

export class Signup {
    name = "";
    email = "";
    password = "";
    confirmPassword = "";
    constructor(public http: HttpClient, private toast : ToastService, private router : Router) { }
    signUp(e: any) {
        e.preventDefault();
        if(this.password !== this.confirmPassword)
        {
            console.log("password and confirmPassword do not match each other")
        }
        const userData = {
            name: this.name, 
            email: this.email,
            password: this.password
        }
        
        this.http.post("http://localhost:5000/users",userData)
            .subscribe({
                next: data => {
                    console.log(data);
                    this.router.navigate(['/signin']);
                },
                error: err => this.toast.error("error occurred while registering")
            })
    }
}
