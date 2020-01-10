import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module';
import { AdminActivitiesComponent } from './admin-activities.component';
import {LoadingSpinnerComponent} from '../../Shared/loading-spinner/loading-spinner.component'
import {AdminActivityCardComponent} from '../admin-activities/admin-activity-card/admin-activity-card.component'

describe('AdminActivitiesComponent', () => {
  let component: AdminActivitiesComponent;
  let fixture: ComponentFixture<AdminActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminActivitiesComponent,LoadingSpinnerComponent,AdminActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
