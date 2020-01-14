import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeweegtipComponent } from './beweegtip.component';

describe('BeweegtipComponent', () => {
  let component: BeweegtipComponent;
  let fixture: ComponentFixture<BeweegtipComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeweegtipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeweegtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
