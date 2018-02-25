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

    getAll(): Observable<Readonly<Person>> {
        return this.client
            .get('http://agl-developer-test.azurewebsites.net/people.json')
            .map(x => x.json())
            .map(x => x.pets ? x : { ...x, pets: [] });
    }
}