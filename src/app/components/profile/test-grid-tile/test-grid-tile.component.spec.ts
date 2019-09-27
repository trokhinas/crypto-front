import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridTileComponent } from './test-grid-tile.component';

describe('TestGridTileComponent', () => {
  let component: TestGridTileComponent;
  let fixture: ComponentFixture<TestGridTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGridTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGridTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
