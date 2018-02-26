import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerGenderComponent } from './owner-gender.component';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

describe('OwnerGenderComponent', () => {
    let component: OwnerGenderComponent;
    let fixture: ComponentFixture<OwnerGenderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OwnerGenderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OwnerGenderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {

        const gender = "Male";
        const pets = [{ name: "CCC", type: "cat" }, { name: "AAA", type: "cat" }, { name: "BBB", type: "dog" }];

        component.gender = gender;
        component.pets = pets;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const root = fixture.nativeElement as HTMLElement;
            const header = root.querySelector('h2');
            expect(header).toBeTruthy()
            expect(header!.textContent.trim()).toBe(gender);


            const petsList = root.querySelector('ul')
            expect(petsList).toBeTruthy()
            const petItems = petsList!.children;
            expect(petItems.length).toBe(3)
            expect(petItems[0].textContent).toBe("AAA");
            expect(petItems[1].textContent).toBe("BBB");
            expect(petItems[2].textContent).toBe("CCC");
        })

    })
});
