import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestControlPanelComponent } from './test-control-panel.component';

describe('TestControlPanelComponent', () => {
  let component: TestControlPanelComponent;
  let fixture: ComponentFixture<TestControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
