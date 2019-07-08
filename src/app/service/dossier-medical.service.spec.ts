import { TestBed } from '@angular/core/testing';

import { DossierMedicalService } from './dossier-medical.service';

describe('DossierMedicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DossierMedicalService = TestBed.get(DossierMedicalService);
    expect(service).toBeTruthy();
  });
});
