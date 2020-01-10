import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SizasportsSubcategoryComponent } from './sizasports-subcategory.component';
import {SharedModule} from '../../Shared/shared.module';
import { SizasportsCategoryCardComponent} from '../sizasports-category-card/sizasports-category-card.component'
import {LoadingSpinnerComponent} from '../../Shared/loading-spinner/loading-spinner.component'
import {SizasportsActivityCardComponent} from '../sizasports-activity-card/sizasports-activity-card.component';
import { RouterModule } from '@angular/router';

describe('SizasportsSubcategoryComponent', () => {
  let component: SizasportsSubcategoryComponent;
  let fixture: ComponentFixture<SizasportsSubcategoryComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule,
        RouterModule.forRoot([]),
      ],
      declarations: [ SizasportsSubcategoryComponent, SizasportsCategoryCardComponent, LoadingSpinnerComponent, SizasportsActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
