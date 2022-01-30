import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonApiComponent } from './common-api.component';

describe('CommonApiComponent', () => {
  let component: CommonApiComponent;
  let fixture: ComponentFixture<CommonApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
