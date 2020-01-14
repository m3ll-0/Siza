import { TestBed } from '@angular/core/testing';
import {SharedModule} from '../Shared/shared.module'
import { AdminService } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule]
  }));

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });
});
