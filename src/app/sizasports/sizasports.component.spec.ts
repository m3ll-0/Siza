import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../Shared/shared.module';
import { SizasportsComponent } from './sizasports.component';
import { LoadingSpinnerComponent } from '../Shared/loading-spinner/loading-spinner.component'
import {SizasportsCategoryCardComponent} from '../sizasports/sizasports-category-card/sizasports-category-card.component'

describe('SizasportsComponent', () => {
  let component: SizasportsComponent;
  let fixture: ComponentFixture<SizasportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ SizasportsComponent, LoadingSpinnerComponent,SizasportsCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
