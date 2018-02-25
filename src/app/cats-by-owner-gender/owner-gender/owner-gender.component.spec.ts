import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerGenderComponent } from './owner-gender.component';

describe('OwnerGenderComponent', () => {
  let component: OwnerGenderComponent;
  let fixture: ComponentFixture<OwnerGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
