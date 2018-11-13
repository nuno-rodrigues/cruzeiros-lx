import { TestBed, inject } from '@angular/core/testing';

import { GetCruisesService } from './get-cruises.service';

describe('GetCruisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCruisesService]
    });
  });

  it('should be created', inject([GetCruisesService], (service: GetCruisesService) => {
    expect(service).toBeTruthy();
  }));
});
