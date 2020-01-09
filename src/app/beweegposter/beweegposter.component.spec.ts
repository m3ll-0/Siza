import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from '../banner/banner.component';
import { BeweegposterComponent } from './beweegposter.component';

describe('BeweegposterComponent', () => {
  let component: BeweegposterComponent;
  let fixture: ComponentFixture<BeweegposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeweegposterComponent,BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeweegposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
