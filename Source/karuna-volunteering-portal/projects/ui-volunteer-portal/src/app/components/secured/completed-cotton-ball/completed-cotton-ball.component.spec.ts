import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCottonBallComponent } from './completed-cotton-ball.component';

describe('CompletedCottonBallComponent', () => {
  let component: CompletedCottonBallComponent;
  let fixture: ComponentFixture<CompletedCottonBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedCottonBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCottonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
