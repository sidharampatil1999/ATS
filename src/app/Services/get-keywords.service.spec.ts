import { TestBed } from '@angular/core/testing';

import { GetKeywordsService } from './get-keywords.service';

describe('GetKeywordsService', () => {
  let service: GetKeywordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKeywordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
