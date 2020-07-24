import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5ExampleSectionComponent } from './p5-example-section.component';

describe('P5ExampleSectionComponent', () => {
  let component: P5ExampleSectionComponent;
  let fixture: ComponentFixture<P5ExampleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5ExampleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5ExampleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
