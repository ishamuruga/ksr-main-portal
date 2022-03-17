import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTweetComponent } from './ang-tweet.component';

describe('AngTweetComponent', () => {
  let component: AngTweetComponent;
  let fixture: ComponentFixture<AngTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
