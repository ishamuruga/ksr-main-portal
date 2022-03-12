import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbGridComponent } from './fb-grid.component';

describe('FbGridComponent', () => {
  let component: FbGridComponent;
  let fixture: ComponentFixture<FbGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
