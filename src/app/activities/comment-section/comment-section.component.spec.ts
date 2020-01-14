import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module'
import { CommentSectionComponent } from './comment-section.component';
import {CommentComponent} from './comment/comment.component'

describe('CommentSectionComponent', () => {
  let component: CommentSectionComponent;
  let fixture: ComponentFixture<CommentSectionComponent>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ CommentSectionComponent, CommentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
