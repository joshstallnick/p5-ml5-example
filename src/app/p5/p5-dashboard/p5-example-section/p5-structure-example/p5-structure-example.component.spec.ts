import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5StructureExampleComponent } from './p5-structure-example.component';

describe('P5StructureExampleComponent', () => {
  let component: P5StructureExampleComponent;
  let fixture: ComponentFixture<P5StructureExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5StructureExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5StructureExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
