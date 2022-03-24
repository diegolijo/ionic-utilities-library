import { TestBed } from '@angular/core/testing';

import { IonicUtilitiesService } from './ionic-utilities.service';

describe('IonicUtilitiesService', () => {
  let service: IonicUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
