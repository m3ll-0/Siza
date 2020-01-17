import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../Shared/shared.module'
import { CommentSectionComponent, DialogOverviewExampleDialog } from './comment-section.component';
import {CommentComponent} from './comment/comment.component'
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { AppModule } from 'src/app/app.module';

describe('CommentSectionComponent', () => {
  let component: CommentSectionComponent;
  let dialog : DialogOverviewExampleDialog;
  let fixture: ComponentFixture<CommentSectionComponent>;
  let fixtureDialog: ComponentFixture<DialogOverviewExampleDialog>;

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ CommentSectionComponent, CommentComponent, DialogOverviewExampleDialog]
    }).overrideModule(SharedModule, {set: {entryComponents: [DialogOverviewExampleDialog]}})
    .compileComponents();
    TestBed.get(MatDialogRef)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSectionComponent);
    fixtureDialog = TestBed.createComponent(DialogOverviewExampleDialog);
    component = fixture.componentInstance;
    dialog = fixtureDialog.componentInstance;
    fixture.detectChanges();
    fixtureDialog.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(dialog).toBeTruthy();
  });

//   it('method should be called', () => {
//     component.loggedIn = false
//     component.id = "testid"
//     var spy = spyOn(component, "onSubmit").and.callThrough();
//     const testForm = <NgForm>{
//       value: {
//         message: "testMessage",
//       }
//     };
//     const loginForm = <NgForm>{
//       value: {
//         email: "g.withagen1@student.avans.nl",
//         stayLoggedIn: true,
//         password: "password",
//       }
//     };
//     component.onSubmit(testForm)
//     dialog.onSubmitLogin(loginForm)
//     expect(component).toBeDefined();
//     expect(spy);
//     expect(component.onSubmit).toHaveBeenCalledTimes(2);
//     expect(dialog.onSubmitLogin).toHaveBeenCalledTimes(1); 
//     expect(component.loggedIn); 
// });
});
