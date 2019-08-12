import { TestBed, inject } from '@angular/core/testing';

import { AngtLibService } from './angt-lib.service';

describe('AngtLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngtLibService]
    });
  });

  it('should be created', inject([AngtLibService], (service: AngtLibService) => {
    expect(service).toBeTruthy();
  }));
});
