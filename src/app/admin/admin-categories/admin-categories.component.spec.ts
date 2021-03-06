import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module'
import {LoadingSpinnerComponent} from '../../Shared/loading-spinner/loading-spinner.component'
import { AdminCategoriesComponent } from './admin-categories.component';
import {TreeNodeComponent} from './admin-categories.component'
import {AdminCategoryCardComponent} from '../admin-categories/admin-category-card/admin-category-card.component'

describe('AdminCategoriesComponent', () => {
  let component: AdminCategoriesComponent;
  let fixture: ComponentFixture<AdminCategoriesComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminCategoriesComponent,LoadingSpinnerComponent, TreeNodeComponent, AdminCategoryCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
