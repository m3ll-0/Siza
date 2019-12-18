import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeweegposterComponent } from './beweegposter.component';

describe('BeweegposterComponent', () => {
  let component: BeweegposterComponent;
  let fixture: ComponentFixture<BeweegposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeweegposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeweegposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
