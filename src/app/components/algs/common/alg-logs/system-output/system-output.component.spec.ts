import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemOutputComponent } from './system-output.component';

describe('SystemOutputComponent', () => {
  let component: SystemOutputComponent;
  let fixture: ComponentFixture<SystemOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
