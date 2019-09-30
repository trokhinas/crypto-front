import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgListComponent } from './alg-list.component';

describe('AlgListComponent', () => {
  let component: AlgListComponent;
  let fixture: ComponentFixture<AlgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
