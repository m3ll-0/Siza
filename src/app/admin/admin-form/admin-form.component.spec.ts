import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module'
import { AdminFormComponent } from './admin-form.component';
import { LoadingSpinnerComponent } from '../../Shared/loading-spinner/loading-spinner.component'

describe('AdminFormComponent', () => {
  let component: AdminFormComponent;
  let fixture: ComponentFixture<AdminFormComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminFormComponent, LoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
