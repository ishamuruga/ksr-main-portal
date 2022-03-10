import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Virgrid2Component } from './virgrid2.component';

describe('Virgrid2Component', () => {
  let component: Virgrid2Component;
  let fixture: ComponentFixture<Virgrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Virgrid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Virgrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
