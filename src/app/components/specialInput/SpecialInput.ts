import {Component, Injectable, input} from "@angular/core";

@Component({
    selector: 'special-input',
    templateUrl:'./template.html',
    styleUrl: './style.css'
})

export class SpecialInput{
    length: number = 10;
    name = input("");
    ngOnInit(){
        console.log(this.length)
        console.log(this.name())
    }
}