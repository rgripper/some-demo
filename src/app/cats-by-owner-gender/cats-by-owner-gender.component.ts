import { Component, OnInit } from '@angular/core';
import { PersonService, PersonGender, Pet, Person } from '../../data/PersonService';
import { Observable } from 'rxjs/Observable';
import { ArrayHelper } from '../ArrayHelper';

interface GenderAndPets {
    gender: PersonGender
    pets: ReadonlyArray<Pet>
}

@Component({
    selector: 'app-cats-by-owner-gender',
    templateUrl: './cats-by-owner-gender.component.html',
    styleUrls: ['./cats-by-owner-gender.component.css']
})
export class CatsByOwnerGenderComponent implements OnInit {

    constructor(private personService: PersonService) { }

    petsByOwnersGenders$: Observable<ReadonlyArray<{ gender: PersonGender, pets: ReadonlyArray<Pet> }>>

    ngOnInit() {
        this.petsByOwnersGenders$ = this.personService
            .getAll()
            .do(x => console.log(x))
            .map(persons => this.groupByGender(persons));
    }

    private groupByGender(persons: ReadonlyArray<Person>): ReadonlyArray<GenderAndPets> {
        return ArrayHelper
            .groupBy(persons, p => p.gender)
            .map(({key, values}) => ({ 
                gender: key, 
                pets: ArrayHelper.flatten(values.map(p => p.pets)) 
            }));
    }

}
