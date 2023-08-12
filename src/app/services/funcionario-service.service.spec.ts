import { TestBed } from '@angular/core/testing';

import { FuncionarioServiceService } from './funcionario-service.service';

describe('FuncionarioServiceService', () => {
  let service: FuncionarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
