import { TestBed } from '@angular/core/testing';

import { CreateCheckerService } from './create-checker.service';

describe('CreateCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCheckerService = TestBed.get(CreateCheckerService);
    expect(service).toBeTruthy();
  });
});
