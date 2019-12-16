import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizasportsComponent } from './sizasports.component';

describe('SizasportsComponent', () => {
  let component: SizasportsComponent;
  let fixture: ComponentFixture<SizasportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizasportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
