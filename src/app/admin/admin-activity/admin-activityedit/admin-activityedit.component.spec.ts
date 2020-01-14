import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../Shared/shared.module';
import { AdminActivityeditComponent} from './admin-activityedit.component';

describe('AdminActivityCardComponent', () => {
  let component: AdminActivityeditComponent;
  let fixture: ComponentFixture<AdminActivityeditComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminActivityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
