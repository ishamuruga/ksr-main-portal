import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KVolServicesComponent } from './k-vol-services.component';

describe('KVolServicesComponent', () => {
  let component: KVolServicesComponent;
  let fixture: ComponentFixture<KVolServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KVolServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KVolServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
