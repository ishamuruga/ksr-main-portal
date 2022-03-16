import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiComponentsComponent } from './common-ui-components.component';

describe('CommonUiComponentsComponent', () => {
  let component: CommonUiComponentsComponent;
  let fixture: ComponentFixture<CommonUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
