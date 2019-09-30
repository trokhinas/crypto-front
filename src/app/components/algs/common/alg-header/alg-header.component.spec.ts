import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgHeaderComponent } from './alg-header.component';

describe('AlgHeaderComponent', () => {
  let component: AlgHeaderComponent;
  let fixture: ComponentFixture<AlgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
