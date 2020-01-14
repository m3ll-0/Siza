import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LoadingSpinnerComponent} from '../Shared/loading-spinner/loading-spinner.component'
import { AuthComponent } from './auth.component';
import {SharedModule} from '../Shared/shared.module';


describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AuthComponent,LoadingSpinnerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
