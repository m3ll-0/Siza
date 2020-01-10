import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module';
import { AdminUserOverviewComponent } from './admin-user-overview.component';

describe('AdminUserOverviewComponent', () => {
  let component: AdminUserOverviewComponent;
  let fixture: ComponentFixture<AdminUserOverviewComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminUserOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
