import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule} from '../../../Shared/shared.module';
import { AdminCategoryEditComponent } from './admin-category-edit.component';

describe('AdminCategoryEditComponent', () => {
  let component: AdminCategoryEditComponent;
  let fixture: ComponentFixture<AdminCategoryEditComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
