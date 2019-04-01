import { TestBed } from '@angular/core/testing';

import { RelatorioUsoService } from './relatorio-uso.service';

describe('RelatorioUsoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelatorioUsoService = TestBed.get(RelatorioUsoService);
    expect(service).toBeTruthy();
  });
});
