import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityeditComponent } from './admin-activityedit.component';

describe('AdminActivityeditComponent', () => {
  let component: AdminActivityeditComponent;
  let fixture: ComponentFixture<AdminActivityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
