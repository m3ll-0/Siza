import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder} from '@angular/forms'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog} from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  
  @ViewChild('activitiesImage', {static: false}) activitiesImage: ElementRef
  @ViewChild('setup', {static: false}) setup: ElementRef

  selectedFile: File
  activities
  category
  setupImg
  activityImg
  suggestion

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
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
    ) { }

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
  
    this.apiService.addActivity(file).subscribe((data) => {
      this.router.navigate(['/admin/activities'])
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

    this.form = this.formBuilder.group({
      category: ['', Validators.required, ],
      wheelchair: ['', Validators.required],
      amountOfPeople: ['', Validators.required],
      duration: ['', Validators.required],
      title: ['Vul in', Validators.required],
      goal: ['Vul in', Validators.required,  ],
      material: ['Vul in', Validators.required],
      activity: ['Vul in', Validators.required],
      setUp: ['Vul in', Validators.required],
      pointsForAttention: ['Vul in', Validators.required],
      tooEasy: ['Vul in', Validators.required],
      tooHard: ['Vul in', Validators.required],
      setupImage: [null, Validators.required],
      activityImage: [null, Validators.required]
      })
      this.apiService.getCategories().subscribe((data) => {
        const categories = 'categories'
        this.category = data[categories]
      })

      const suggestionId = this.route.snapshot.paramMap.get('suggestionId');

      if(suggestionId !== null && suggestionId !== undefined) {
        const keya = 'suggestion';
        const keyb = 'activity'
        this.apiService.getSuggetionById(suggestionId).subscribe(data => {
          this.suggestion = data[keya][keyb];
          this.patchValue()
        })
      }
  }

  patchValue() {
    this.form.patchValue({
      wheelchair: this.suggestion.wheelchair.toString(),
      amountOfPeople: this.suggestion.amountOfPeople.toString(),
      duration: this.suggestion.duration.toString(),
      category: this.suggestion.category,
      title: this.suggestion.title,
      goal:  this.suggestion.goal,
      material: this.suggestion.material,
      activity: this.suggestion.activity,
      setUp: this.suggestion.setUp,
      pointsForAttention: this.suggestion.pointsForAttention,
      tooEasy: this.suggestion.tooEasy,
      tooHard: this.suggestion.tooHard
    })

    console.error(this.suggestion);
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
