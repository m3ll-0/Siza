import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizasportsSubcategoryComponent } from './sizasports-subcategory.component';

describe('SizasportsSubcategoryComponent', () => {
  let component: SizasportsSubcategoryComponent;
  let fixture: ComponentFixture<SizasportsSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizasportsSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
