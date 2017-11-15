import { TestBed, inject } from '@angular/core/testing';

import { BillLineService } from './bill-line.service';

describe('BillLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillLineService]
    });
  });

  it('should be created', inject([BillLineService], (service: BillLineService) => {
    expect(service).toBeTruthy();
  }));
});
