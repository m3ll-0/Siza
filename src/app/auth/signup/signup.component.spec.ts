import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from '../../Shared/loading-spinner/loading-spinner.component'
import { SignupComponent } from './signup.component';
import {SharedModule} from '../../Shared/shared.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ SignupComponent, LoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
