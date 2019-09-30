import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgControlPanelComponent } from './alg-control-panel.component';

describe('AlgControlPanelComponent', () => {
  let component: AlgControlPanelComponent;
  let fixture: ComponentFixture<AlgControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
