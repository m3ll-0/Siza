import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesComponent } from './activities.component';
import {SharedModule} from '../Shared/shared.module';
import {CommentSectionComponent} from '../activities/comment-section/comment-section.component';
import {LoadingSpinnerComponent} from '../Shared/loading-spinner/loading-spinner.component'
import { CommentComponent } from '../activities/comment-section/comment/comment.component'

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,
      ],
      declarations: [ ActivitiesComponent, CommentSectionComponent, LoadingSpinnerComponent, CommentComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
