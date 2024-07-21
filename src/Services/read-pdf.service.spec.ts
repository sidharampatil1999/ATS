import { TestBed } from '@angular/core/testing';

import { ReadPdfService } from './read-pdf.service';

describe('ReadPdfService', () => {
  let service: ReadPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
