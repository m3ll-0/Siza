import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityCardComponent } from './admin-activity-card.component';

describe('AdminActivityCardComponent', () => {
  let component: AdminActivityCardComponent;
  let fixture: ComponentFixture<AdminActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
