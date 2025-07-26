import { TestBed } from '@angular/core/testing';

import { LancamentosServiceService } from './lancamentos-service.service';

describe('LancamentosServiceService', () => {
  let service: LancamentosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancamentosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
