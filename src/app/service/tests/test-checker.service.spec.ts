import { TestBed } from '@angular/core/testing';

import { TestCheckerService } from './test-checker.service';

describe('TestCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestCheckerService = TestBed.get(TestCheckerService);
    expect(service).toBeTruthy();
  });
});
