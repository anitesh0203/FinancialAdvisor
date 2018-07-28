import { TestBed, inject } from '@angular/core/testing';

import { ServiceLayerService } from './service-layer.service';

describe('ServiceLayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLayerService]
    });
  });

  it('should be created', inject([ServiceLayerService], (service: ServiceLayerService) => {
    expect(service).toBeTruthy();
  }));
});
