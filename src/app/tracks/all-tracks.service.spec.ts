import { TestBed } from '@angular/core/testing';

import { AllTracksService } from './all-tracks.service';

describe('AllTracksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTracksService = TestBed.get(AllTracksService);
    expect(service).toBeTruthy();
  });
});
