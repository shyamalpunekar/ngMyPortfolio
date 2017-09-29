import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureGoalsComponent } from './future-goals.component';

describe('FutureGoalsComponent', () => {
  let component: FutureGoalsComponent;
  let fixture: ComponentFixture<FutureGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
