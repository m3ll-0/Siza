import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl, FormsModule, FormBuilder} from '@angular/forms'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  
  @ViewChild("activityImage", {static: false}) activityImage: ElementRef
  @ViewChild("setup", {static: false}) setup: ElementRef

  selectedFile: File
  activities
  category
 
  editorTitle: boolean = false
  editorGoal: boolean = false
  editorMaterial: boolean = false
  editorActivity: boolean = false
  editorSetup: boolean = false
  editorTooEasy: boolean = false
  editorTooHard: boolean = false
  editorPointsForAttention: boolean = false

  form: FormGroup;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: '',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  closeEditor() {
    this.editorGoal = false
    this.editorTitle = false
    this.editorActivity = false
    this.editorMaterial = false
    this.editorSetup = false
    this.editorTooEasy = false
    this.editorTooHard = false
    this.editorPointsForAttention = false
  }

  saveEditor() {

    console.log("hey" + this.form.controls['category'].value);
    

    const imageblob = [this.activityImage.nativeElement.files[0], this.setup.nativeElement.files[0]]
    const file = new FormData()
    
    file.append('images', imageblob[0])
    file.append('images', imageblob[1])
    file.append('title', this.form.controls['title'].value)
    file.append('category', this.form.controls['category'].value)
    file.append('activity', this.form.controls['activity'].value)
    file.append('material', this.form.controls['material'].value)
    file.append('setUp', this.form.controls['setUp'].value)
    file.append('pointsForAttention', this.form.controls['pointsForAttention'].value)
    file.append('tooEasy', this.form.controls['tooEasy'].value)
    file.append('tooHard', this.form.controls['tooHard'].value)
  
    this.apiService.addActivity(file).subscribe((data) =>{
      console.log(data);
    })

    this.editorGoal = false
    this.editorTitle = false
    this.editorActivity = false
    this.editorMaterial = false
    this.editorSetup = false
    this.editorPointsForAttention = false
    this.editorTooEasy = false
    this.editorTooHard = false 
  }


  editTitle() {
    this.closeEditor()
    const dialogRef = this.dialog.open(DialogEditor, {
      width: '50%',
      height: '50%'
    })
    dialogRef.afterClosed().subscribe(result => {

    })

    this.editorTitle = true
    }
  editGoal() {
    this.closeEditor()
    this.editorGoal = true
    }
  editActivity() {
    this.closeEditor()
    this.editorActivity = true
    }
  editMaterial() {
    this.closeEditor()
    this.editorMaterial = true
    }
  editSetup() {
    this.closeEditor()
    this.editorSetup = true
    }
  editPointsForAttention() {
    this.closeEditor()
    this.editorPointsForAttention = true
    }
  editTooEasy() {
    this.closeEditor()
    this.editorTooEasy = true
    }
  editTooHard() {
    this.closeEditor()
    this.editorTooHard = true
    }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      category: [''],
      wheelchair: '',
      amountOfPeople: '',
      duration: '',
      title: 'title',
      goal: 'title',
      material: 'title',
      activity: 'title',
      setUp: 'title',
      pointsForAttention: 'title',
      tooEasy: 'title',
      tooHard: 'title'
      })
      this.apiService.getCategories().subscribe((data) =>{
        console.log(data);
        this.category = data['categories']
      })
  }

  onChange(event) {
    console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
    console.warn(this.form.value);
  }
}

@Component({
  selector: 'dialogeditor',
  templateUrl: 'dialog-editor.html'
})

export class DialogEditor {
  name = 'test'

  constructor(
    public dialogRef: MatDialogRef<DialogEditor>,
    @Inject(MAT_DIALOG_DATA) public data: {} )
  {}
}