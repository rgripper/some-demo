import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsByOwnerGenderComponent } from './cats-by-owner-gender.component';

describe('CatsByOwnerGenderComponent', () => {
  let component: CatsByOwnerGenderComponent;
  let fixture: ComponentFixture<CatsByOwnerGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsByOwnerGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsByOwnerGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
