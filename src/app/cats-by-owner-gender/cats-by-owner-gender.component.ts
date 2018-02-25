import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../data/PersonService';

@Component({
    selector: 'app-cats-by-owner-gender',
    templateUrl: './cats-by-owner-gender.component.html',
    styleUrls: ['./cats-by-owner-gender.component.css']
})
export class CatsByOwnerGenderComponent implements OnInit {

    constructor(private personService: PersonService) { }

    ngOnInit() {
    }

}
