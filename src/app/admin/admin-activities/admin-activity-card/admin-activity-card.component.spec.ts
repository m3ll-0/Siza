import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../Shared/shared.module';
import { AdminActivityCardComponent } from './admin-activity-card.component';

describe('AdminActivityCardComponent', () => {
  let component: AdminActivityCardComponent;
  let fixture: ComponentFixture<AdminActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
