import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDialogueComponent } from './sucess-dialogue.component';

describe('SucessDialogueComponent', () => {
  let component: SucessDialogueComponent;
  let fixture: ComponentFixture<SucessDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
