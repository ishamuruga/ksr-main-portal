import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottonBallComponent } from './cotton-ball.component';

describe('CottonBallComponent', () => {
  let component: CottonBallComponent;
  let fixture: ComponentFixture<CottonBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottonBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
