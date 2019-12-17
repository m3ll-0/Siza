import { TestBed } from '@angular/core/testing';

import { AdministratorActivityService } from './administrator-activity.service';

describe('AdministratorActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratorActivityService = TestBed.get(AdministratorActivityService);
    expect(service).toBeTruthy();
  });
});
