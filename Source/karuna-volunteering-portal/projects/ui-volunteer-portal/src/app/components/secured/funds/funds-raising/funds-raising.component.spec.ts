import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsRaisingComponent } from './funds-raising.component';

describe('FundsRaisingComponent', () => {
  let component: FundsRaisingComponent;
  let fixture: ComponentFixture<FundsRaisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsRaisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
