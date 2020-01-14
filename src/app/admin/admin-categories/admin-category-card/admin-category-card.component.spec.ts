import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../Shared/shared.module';
import { AdminCategoryCardComponent } from './admin-category-card.component';

describe('AdminCategoryCardComponent', () => {
  let component: AdminCategoryCardComponent;
  let fixture: ComponentFixture<AdminCategoryCardComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
