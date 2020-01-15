import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl, FormsModule, FormBuilder} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-activityedit',
  templateUrl: './admin-activityedit.component.html',
  styleUrls: ['./admin-activityedit.component.scss']
})
export class AdminActivityeditComponent implements OnInit {
  
  @ViewChild('activitiesImage', {static: false}) activitiesImage: ElementRef
  @ViewChild('setup', {static: false}) setup: ElementRef

  selectedFile: File
  activities
  activity
  category
  setupImg
  activityImg
 
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
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
    ) {
      let value
      this.activatedRoute.params.subscribe( params => value = params.id );
      this.apiService.getSpecificActivity(value).subscribe((data) => {
        const key = 'activity'
        this.activities = data[key]
      } )
     }

    public addFile(event: any) {
      if (event.target.files && event.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (x: any) => {
                  this.setupImg = x.target.result
              }
              reader.readAsDataURL(event.target.files[0]);
          }
    }

    public addActivityImg(event: any) {
      if (event.target.files && event.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (x: any) => {
                  this.activityImg = x.target.result
              }
              reader.readAsDataURL(event.target.files[0]);
          }
    }

    onGoBack() {
      this.location.back();
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
    const imageblob = [this.activitiesImage.nativeElement.files[0], this.setup.nativeElement.files[0]]
    const file = new FormData()
    
    const title = 'title'
    const category = 'category'
    const activity = 'activity'
    const material = 'material'
    const goal = 'goal'
    const setUp = 'setUp'
    const pointsForAttention = 'pointsForAttention'
    const tooEasy = 'tooEasy'
    const tooHard = 'tooHard'

    const amountOfPeople = 'amountOfPeople'
    const wheelchair = 'wheelchair'
    const duration = 'duration'

    file.append('images', imageblob[0])
    file.append('images', imageblob[1])
    file.append('title', this.form.controls[title].value)
    file.append('category', this.form.controls[category].value)
    file.append('activity', this.form.controls[activity].value)
    file.append('material', this.form.controls[material].value)
    file.append('goal', this.form.controls[goal].value)
    file.append('setUp', this.form.controls[setUp].value)
    file.append('pointsForAttention', this.form.controls[pointsForAttention].value)
    file.append('tooEasy', this.form.controls[tooEasy].value)
    file.append('tooHard', this.form.controls[tooHard].value)

    file.append('amountOfPeople', this.form.controls[amountOfPeople].value)
    file.append('wheelchair', this.form.controls[wheelchair].value)
    file.append('duration', this.form.controls[duration].value)
  
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

    this.router.navigate(['/admin/activities'])
  }


  editTitle() {
    console.log();
    
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

    this.apiService.getCategories().subscribe((data) => {
      const categories = 'categories'
      this.category = data[categories]
    })
    
    this.apiService.getSpecificActivity(value).subscribe((data) => {
      const activities = 'activity'
      this.activity = data[activities]

      console.log(this.activity[0].category);
      

    this.form = this.formBuilder.group({
      category: [this.activity[0].category, Validators.required, ],
      wheelchair: [this.activity[0].wheelchair, Validators.required],
      amountOfPeople: ['', Validators.required],
      duration: ['', Validators.required],
      title: [this.activity[0].title, Validators.required],
      goal: [this.activity[0].goal, Validators.required,  ],
      material: [this.activity[0].material, Validators.required],
      activity: [this.activity[0].activity, Validators.required],
      setUp: [this.activity[0].setUp, Validators.required],
      pointsForAttention: [this.activity[0].pointsForAttention, Validators.required],
      tooEasy: ['Vul in', Validators.required],
      tooHard: ['Vul in', Validators.required],
      setupImage: [null, ],
      activityImage: [null, ]
      })
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
