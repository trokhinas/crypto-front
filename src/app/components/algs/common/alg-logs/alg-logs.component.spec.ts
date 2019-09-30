import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgLogsComponent } from './alg-logs.component';

describe('AlgLogsComponent', () => {
  let component: AlgLogsComponent;
  let fixture: ComponentFixture<AlgLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
