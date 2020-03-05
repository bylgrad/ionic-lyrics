import { TestBed } from '@angular/core/testing';

import { FirelyricsService } from './firelyrics.service';

describe('FirelyricsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirelyricsService = TestBed.get(FirelyricsService);
    expect(service).toBeTruthy();
  });
});
