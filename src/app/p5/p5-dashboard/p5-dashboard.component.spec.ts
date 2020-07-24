import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5DashboardComponent } from './p5-dashboard.component';

describe('P5DashboardComponent', () => {
  let component: P5DashboardComponent;
  let fixture: ComponentFixture<P5DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
