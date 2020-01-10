import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../Shared/shared.module';

import { AdminActivityComponent } from './admin-activity.component';

describe('AdminActivityComponent', () => {
  let component: AdminActivityComponent;
  let fixture: ComponentFixture<AdminActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AdminActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
