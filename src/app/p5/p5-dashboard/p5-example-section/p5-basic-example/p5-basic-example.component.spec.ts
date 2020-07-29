import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5BasicExampleComponent } from './p5-basic-example.component';

describe('P5BasicExampleComponent', () => {
  let component: P5BasicExampleComponent;
  let fixture: ComponentFixture<P5BasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5BasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5BasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
