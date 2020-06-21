import {TestBed} from '@angular/core/testing';

import {SnakeCaseInterceptorService} from './snake-case-interceptor.service';

describe('SnakeCaseInterceptorService', () => {
  let service: SnakeCaseInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakeCaseInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
