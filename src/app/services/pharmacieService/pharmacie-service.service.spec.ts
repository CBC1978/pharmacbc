import { TestBed } from '@angular/core/testing';

import { PharmacieServiceService } from './pharmacie-service.service';

describe('PharmacieServiceService', () => {
  let service: PharmacieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
