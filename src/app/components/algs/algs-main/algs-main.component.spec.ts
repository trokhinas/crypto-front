import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgsMainComponent } from './algs-main.component';

describe('AlgsMainComponent', () => {
  let component: AlgsMainComponent;
  let fixture: ComponentFixture<AlgsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
