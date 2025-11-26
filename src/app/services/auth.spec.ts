import { TestBed, inject } from '@angular/core/testing';
import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [Auth]});
    service = TestBed.inject(Auth);
  });

  it('should be created', inject([Auth], (service: Auth) => {
    expect(service).toBeTruthy();
  }));
});