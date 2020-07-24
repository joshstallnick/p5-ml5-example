import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ML5SandboxComponent } from './ml5-sandbox.component';

describe('ML5SandboxComponent', () => {
  let component: ML5SandboxComponent;
  let fixture: ComponentFixture<ML5SandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ML5SandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ML5SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
