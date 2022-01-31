import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVolunteerRegistrationComponent } from './new-volunteer-registration.component';

describe('NewVolunteerRegistrationComponent', () => {
  let component: NewVolunteerRegistrationComponent;
  let fixture: ComponentFixture<NewVolunteerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVolunteerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVolunteerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
