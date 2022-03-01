import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCottonBallRequestComponent } from './new-cotton-ball-request.component';

describe('NewCottonBallRequestComponent', () => {
  let component: NewCottonBallRequestComponent;
  let fixture: ComponentFixture<NewCottonBallRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCottonBallRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCottonBallRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
