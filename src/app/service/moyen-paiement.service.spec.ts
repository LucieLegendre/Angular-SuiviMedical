import { TestBed } from '@angular/core/testing';

import { MoyenPaiementService } from './moyen-paiement.service';

describe('MoyenPaiementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoyenPaiementService = TestBed.get(MoyenPaiementService);
    expect(service).toBeTruthy();
  });
});
