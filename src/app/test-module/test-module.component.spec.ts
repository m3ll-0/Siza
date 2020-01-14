import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../Shared/shared.module';
import { TestModuleComponent } from './test-module.component';

describe('TestModuleComponent', () => {
  let component: TestModuleComponent;
  let fixture: ComponentFixture<TestModuleComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ TestModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
