import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
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
  
  @ViewChild("fileInput", {static: false}) fileInput: ElementRef

  selectedFile: File
  activities
  activityID = this.activatedRoute.params.subscribe( params => this.activityID = params.id );
 
  editorTitle: boolean = false
  editorGoal: boolean = false
  editorMaterial: boolean = false
  editorActivity: boolean = false
  editorSetup: boolean = false
  editorTooEasy: boolean = false
  editorTooHard: boolean = false
  editorPointsForAttention: boolean = false

  form: FormGroup;
  forms: FormGroup;

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
    private activatedRoute: ActivatedRoute ,
    private httpClient: HttpClient
    ) {
    this.forms = this.formBuilder.group({
      name: [''],
      categoryImage: [null]
    })
    var value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) =>{
      console.log(data);
      this.activities = data['activity']
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
    var editorgoal = this.form.controls['goal'].value
    var editormaterial= this.form.controls['material'].value
    var editorsetup = this.form.controls['setUp'].value
    var editorSetupImage
    var editorimage
    var editorPointsForAttention = this.form.controls['pointsForAttention'].value
    var editortitle = this.form.controls['title'].value
    var editoractivity= this.form.controls['activity'].value
    var editorTooEasy = this.form.controls['tooEasy'].value
    var editorTooHard = this.form.controls['tooHard'].value

    var editorAmountOfPeople
    var editorDuration
    var editorWheelchair

    const activityParams =  {
      goal: editorgoal,
      title: editortitle, 
      material: editormaterial,
      activity: editoractivity,
      setUp: editorsetup,
      pointsForAttention: editorPointsForAttention,
      tooEasy: editorTooEasy,
      tooHard: editorTooHard,

      wheelChair: editorWheelchair,
      amountOfPeople: editorAmountOfPeople,
      duration: editorDuration,

      setUpImage: editorSetupImage,
      image: editorimage, 
    }   
    var value
    this.activatedRoute.params.subscribe( params => value = params.id );

    console.log(value);
    console.log(this.form.controls['title'].value)
  
    this.apiService.updateActivity(value, activityParams).subscribe((data) =>{
      console.log(data);
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

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
  }

  ngOnInit() {
        var value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) =>{
      console.log(data);
      this.activities = data['activity']
  
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
    file.append('categoryImage', imageblob)
    file.append('name', this.activities[0].title)


    this.httpClient.post('http://siza-api.herokuapp.com/v1/categories', file).subscribe(response => {
      console.log(response)
    })
  }
}
