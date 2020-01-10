import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/navbar/navbar.component'
import {SharedModule} from './Shared/shared.module'
import { FooterComponent } from './footer/footer.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,NavbarComponent,FooterComponent
      ],
    }).compileComponents();
  }));

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
