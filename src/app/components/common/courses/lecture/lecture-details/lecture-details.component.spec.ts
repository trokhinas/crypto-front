import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureDetailsComponent } from './lecture-details.component';

describe('LectureDetailsComponent', () => {
  let component: LectureDetailsComponent;
  let fixture: ComponentFixture<LectureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
