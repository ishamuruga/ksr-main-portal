import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirgridComponent } from './virgrid.component';

describe('VirgridComponent', () => {
  let component: VirgridComponent;
  let fixture: ComponentFixture<VirgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
