import { Component, Input } from '@angular/core';
import { PersonGender, Pet } from '../../../data/PersonService';

@Component({
  selector: 'app-owner-gender',
  templateUrl: './owner-gender.component.html',
  styleUrls: ['./owner-gender.component.css']
})
export class OwnerGenderComponent {

  @Input()
  gender: PersonGender

  @Input()
  pets: ReadonlyArray<Pet>

  orderPetsByName(pets: ReadonlyArray<Pet>): ReadonlyArray<Pet> {
      return pets.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

}
