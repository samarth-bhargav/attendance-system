import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentCaptureComponent } from './student-capture.component';

describe('StudentCaptureComponent', () => {
  let component: StudentCaptureComponent;
  let fixture: ComponentFixture<StudentCaptureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
