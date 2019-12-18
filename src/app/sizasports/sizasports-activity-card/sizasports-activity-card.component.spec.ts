import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizasportsActivityCardComponent } from './sizasports-activity-card.component';

describe('SizasportsActivityCardComponent', () => {
  let component: SizasportsActivityCardComponent;
  let fixture: ComponentFixture<SizasportsActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizasportsActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
