import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'not-found',
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.scss',
})

export class NotFound{

    constructor(public router: Router){}
    doSomething(e:any){
        e.preventDefault();
        this.router.navigate(['/dashboard']);
    }
}