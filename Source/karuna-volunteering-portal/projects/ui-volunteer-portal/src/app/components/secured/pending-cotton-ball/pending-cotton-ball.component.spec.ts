import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCottonBallComponent } from './pending-cotton-ball.component';

describe('PendingCottonBallComponent', () => {
  let component: PendingCottonBallComponent;
  let fixture: ComponentFixture<PendingCottonBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingCottonBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCottonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
