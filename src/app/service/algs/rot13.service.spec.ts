import { TestBed } from '@angular/core/testing';

import { Rot13Service } from './rot13.service';

describe('Rot13Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Rot13Service = TestBed.get(Rot13Service);
    expect(service).toBeTruthy();
  });
});
