import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFundRaisingComponent } from './card-fund-raising.component';

describe('CardFundRaisingComponent', () => {
  let component: CardFundRaisingComponent;
  let fixture: ComponentFixture<CardFundRaisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFundRaisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFundRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
