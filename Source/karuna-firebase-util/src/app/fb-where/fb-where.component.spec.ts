import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbWhereComponent } from './fb-where.component';

describe('FbWhereComponent', () => {
  let component: FbWhereComponent;
  let fixture: ComponentFixture<FbWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbWhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
