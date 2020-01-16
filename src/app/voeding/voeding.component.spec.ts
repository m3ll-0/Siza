import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoedingComponent } from './voeding.component';

describe('VoedingComponent', () => {
  let component: VoedingComponent;
  let fixture: ComponentFixture<VoedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
