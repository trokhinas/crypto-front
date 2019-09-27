import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLinkComponent } from './lecture-link.component';

describe('LectureLinkComponent', () => {
  let component: LectureLinkComponent;
  let fixture: ComponentFixture<LectureLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
