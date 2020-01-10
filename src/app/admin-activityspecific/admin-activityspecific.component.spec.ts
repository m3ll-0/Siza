import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityspecificComponent } from './admin-activityspecific.component';

describe('AdminActivityspecificComponent', () => {
  let component: AdminActivityspecificComponent;
  let fixture: ComponentFixture<AdminActivityspecificComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivityspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
