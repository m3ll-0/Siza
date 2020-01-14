import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl, FormsModule, FormBuilder} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'


@Component({
  selector: 'app-admin-activityedit',
  templateUrl: './admin-activityedit.component.html',
  styleUrls: ['./admin-activityedit.component.css']
})
export class AdminActivityeditComponent implements OnInit {
  
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef

  selectedFile: File
  activities
  activityID = this.activatedRoute.params.subscribe( params => this.activityID = params.id );
 
  editorTitle = false
  editorGoal = false
  editorMaterial = false
  editorActivity = false
  editorSetup = false
  editorTooEasy = false
  editorTooHard = false
  editorPointsForAttention = false

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
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  }

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute ,
    private httpClient: HttpClient
    ) {
    let value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) => {
      const key = 'activity'
      this.activities = data[key]
    } )
  }

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
    const imageblob = [this.fileInput.nativeElement.files[0], this.fileInput.nativeElement.files[0]]
    const file = new FormData()
    
    const title = 'title'
    const activity = 'activity'
    const material = 'material'
    const setup = 'setup'
    const pointsForAttention = 'pointsForAttention'
    const tooEasy = 'tooEasy'
    const tooHard = 'tooHard'

    file.append('images', imageblob[0])
    file.append('title', this.form.controls[title].value)
    file.append('activity', this.form.controls[activity].value)
    file.append('material', this.form.controls[material].value)
    file.append('setup', this.form.controls[setup].value)
    file.append('pointsForAttention', this.form.controls[pointsForAttention].value)
    file.append('tooEasy', this.form.controls[tooEasy].value)
    file.append('tooHard', this.form.controls[tooHard].value)
  
    let value
    this.activatedRoute.params.subscribe( params => value = params.id );

    this.apiService.updateActivity(value, file).subscribe((data) => {
    } )
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

  ngOnInit() {
    let value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) => {
    const activity = 'activity'
    this.activities = data[activity]
  
    this.form = this.formBuilder.group({
      title: [this.activities[0].title, Validators.required],
      goal: [this.activities[0].goal, Validators.required],
      material: [this.activities[0].material, Validators.required],
      activity: [this.activities[0].activity, Validators.required],
      setUp: [this.activities[0].setUp, Validators.required],
      pointsForAttention: [this.activities[0].pointsForAttention, Validators.required],
      tooEasy: [this.activities[0].tooEasy, Validators.required],
      tooHard: [this.activities[0].tooHard, Validators.required]
      })
    });
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

  onFileUpload() {
    console.log('test');
  
    const imageblob = this.fileInput.nativeElement.files[0]
    const file = new FormData()
    file.append('images', imageblob)


    this.httpClient.post('http://siza-api.herokuapp.com/v1/categories', file).subscribe(response => {
      console.log(response)
    })
  }
}
