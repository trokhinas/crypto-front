import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBodyComponent } from './test-body.component';

describe('TestBodyComponent', () => {
  let component: TestBodyComponent;
  let fixture: ComponentFixture<TestBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
