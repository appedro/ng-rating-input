import { TestBed } from '@angular/core/testing';

import { NgRatingService } from './ng-rating.service';

describe('NgRatingService', () => {
  let service: NgRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
