import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";

export type PersonGender = "Male" | "Female"

export interface Person {
    name: string
    gender: PersonGender
    age: number
    pets: ReadonlyArray<Pet>
}

export interface Pet {
    name: string
    type: string
}

@Injectable()
export class PersonService {
    /**
     *
     */
    constructor(private client: Jsonp) {
    }

    private ensurePetsArray(person: Person): Person {
        return person.pets ? person : { ...person, pets: [] };
    }

    getAll(): Observable<ReadonlyArray<Readonly<Person>>> {
        const search = { callback: "JSONP_CALLBACK" };
        return this.client
            .get('http://agl-developer-test.azurewebsites.net/people.json', { search })
            .map(x => x.json() as Person[])
            .map(persons => persons.map(this.ensurePetsArray));
    }
}