import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5SandboxComponent } from './p5-sandbox.component';

describe('P5SandboxComponent', () => {
  let component: P5SandboxComponent;
  let fixture: ComponentFixture<P5SandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5SandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
