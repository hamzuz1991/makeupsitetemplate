import { TestBed } from '@angular/core/testing';

import { ApitempService } from './apitemp.service';

describe('ApitempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApitempService = TestBed.get(ApitempService);
    expect(service).toBeTruthy();
  });
});
