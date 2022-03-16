import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygiComponent } from './mygi.component';

describe('MygiComponent', () => {
  let component: MygiComponent;
  let fixture: ComponentFixture<MygiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
