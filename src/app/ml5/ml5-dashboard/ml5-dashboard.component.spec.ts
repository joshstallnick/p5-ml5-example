import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ML5DashboardComponent } from './ml5-dashboard.component';

describe('ML5DashboardComponent', () => {
  let component: ML5DashboardComponent;
  let fixture: ComponentFixture<ML5DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ML5DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ML5DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
