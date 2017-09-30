import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectplaceComponent } from './projectplace.component';

describe('ProjectplaceComponent', () => {
  let component: ProjectplaceComponent;
  let fixture: ComponentFixture<ProjectplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
