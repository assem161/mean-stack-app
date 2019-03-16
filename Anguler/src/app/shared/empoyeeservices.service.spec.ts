import { TestBed } from '@angular/core/testing';

import { EmpoyeeservicesService } from './empoyeeservices.service';

describe('EmpoyeeservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpoyeeservicesService = TestBed.get(EmpoyeeservicesService);
    expect(service).toBeTruthy();
  });
});
