import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizasportsCategoryCardComponent } from './sizasports-category-card.component';

describe('SizasportsCategoryCardComponent', () => {
  let component: SizasportsCategoryCardComponent;
  let fixture: ComponentFixture<SizasportsCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizasportsCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizasportsCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
