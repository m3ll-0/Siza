import { TestBed } from '@angular/core/testing';
import {SharedModule} from './Shared/shared.module'
import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule]
  }));

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});
