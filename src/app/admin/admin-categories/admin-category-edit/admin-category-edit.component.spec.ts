import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule} from '../../../Shared/shared.module';
import { AdminCategoryEditComponent } from './admin-category-edit.component';

describe('AdminCategoryEditComponent', () => {
  let component: AdminCategoryEditComponent;
  let fixture: ComponentFixture<AdminCategoryEditComponent>;
  const nameComponent = 'name';

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

  it('Expect empty form to be invalid', () => {
    expect(component.form.valid).toBeFalsy();
  })

  it('Except form category to be filled', () => {
    const category = component.form.controls[nameComponent];
    category.setValue('anything')
    expect(category.valid).toBeTruthy();
  });

  it('Expect not empty form to be valid', () => {
    const category = component.form.controls[nameComponent];
    category.setValue('anything')
    expect(component.form.valid).toBeTruthy();
  })

  it('Expect empty form to be invalid', () => {
    const category = component.form.controls[nameComponent];
    category.setValue('')
    expect(component.form.valid).toBeFalsy();
  })
});
