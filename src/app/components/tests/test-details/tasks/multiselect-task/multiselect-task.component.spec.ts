import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectTaskComponent } from './multiselect-task.component';

describe('MultiselectTaskComponent', () => {
  let component: MultiselectTaskComponent;
  let fixture: ComponentFixture<MultiselectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
