import { TestBed } from '@angular/core/testing';

import { KittiesService } from './kitties.service';

describe('KittiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittiesService = TestBed.get(KittiesService);
    expect(service).toBeTruthy();
  });
});
