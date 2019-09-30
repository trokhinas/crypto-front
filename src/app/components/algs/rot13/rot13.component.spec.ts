import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rot13Component } from './rot13.component';

describe('Rot13Component', () => {
  let component: Rot13Component;
  let fixture: ComponentFixture<Rot13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rot13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rot13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
