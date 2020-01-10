import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module';
import { SizasportsCategoryCardComponent } from './sizasports-category-card.component';
import { RouterModule } from '@angular/router';

describe('SizasportsCategoryCardComponent', () => {
  let component: SizasportsCategoryCardComponent;
  let fixture: ComponentFixture<SizasportsCategoryCardComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,
        RouterModule.forRoot([]),
      ],
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
