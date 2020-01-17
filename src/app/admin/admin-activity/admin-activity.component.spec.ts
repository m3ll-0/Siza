import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module';
import {LoadingSpinnerComponent} from '../../Shared/loading-spinner/loading-spinner.component'
import {AdminActivityCardComponent} from './admin-activity-card/admin-activity-card.component'

import { AdminActivityComponent } from './admin-activity.component';
describe('AdminActivityComponent', () => {
  let component: AdminActivityComponent;
  let fixture: ComponentFixture<AdminActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [],
      declarations: [ AdminActivityComponent, LoadingSpinnerComponent, AdminActivityCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
