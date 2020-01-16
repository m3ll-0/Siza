import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl, FormsModule, FormBuilder} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-activityedit',
  templateUrl: './admin-activityedit.component.html',
  styleUrls: ['./admin-activityedit.component.scss']
})
export class AdminActivityeditComponent implements OnInit {
  
  @ViewChild('activitiesImage', {static: false}) activitiesImage: ElementRef
  @ViewChild('setup', {static: false}) setup: ElementRef

  fro
  selectedFile: File
  activities
  activity2
  category2
  setupImg
  activity2Img

  editorTitle2 = false
  editorGoal2 = false
  editorMaterial2 = false
  editorActivity2 = false
  editorSetup2 = false
  editorTooEasy2 = false
  editorTooHard2 = false
  editorPointsForAttention2 = false

  form: FormGroup = this.formBuilder.group({
    category2: ['', Validators.required, ],
    wheelchair2: ['', Validators.required],
    amountOfPeople2: ['', Validators.required],
    duration2: ['', Validators.required],
    title2: ['Vul in', Validators.required],
    goal2: ['Vul in', Validators.required,  ],
    material2: ['Vul in', Validators.required],
    activity2: ['Vul in', Validators.required],
    setUp2: ['Vul in', Validators.required],
    pointsForAttention2: ['Vul in', Validators.required],
    tooEasy2: ['Vul in', Validators.required],
    tooHard2: ['Vul in', Validators.required],
    setupImage: [null],
    activity2Image: [null]
    })

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
        name: 'title2Text',
        class: 'title2Text',
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
        const key = 'activity2'
        this.activities = data[key]
      } )
     }

    public addFile2(event: any) {
      if (event.target.files && event.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (x: any) => {
                  this.setupImg = x.target.result
              }
              reader.readAsDataURL(event.target.files[0]);
          }
    }

    public addActivityImg2(event: any) {
      if (event.target.files && event.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (x: any) => {
                  this.activity2Img = x.target.result
              }
              reader.readAsDataURL(event.target.files[0]);
          }
    }

    onGoBack() {
      this.location.back();
    }

  closeEditor() {
    this.editorGoal2 = false
    this.editorTitle2 = false
    this.editorActivity2 = false
    this.editorMaterial2 = false
    this.editorSetup2 = false
    this.editorTooEasy2 = false
    this.editorTooHard2 = false
    this.editorPointsForAttention2 = false
  }

  saveEditor() {
    const imageblob = [this.activitiesImage.nativeElement.files[0], this.setup.nativeElement.files[0]]
    const file2 = new FormData()
    
    const title2 = 'title2'
    const category2 = 'category2'
    const activity2 = 'activity2'
    const material2 = 'material2'
    const goal2 = 'goal2'
    const setUp2 = 'setUp2'
    const pointsForAttention2 = 'pointsForAttention2'
    const tooEasy2 = 'tooEasy2'
    const tooHard2 = 'tooHard2'

    const amountOfPeople2 = 'amountOfPeople2'
    const wheelchair2 = 'wheelchair2'
    const duration2 = 'duration2'

    file2.append('images', imageblob[0])
    file2.append('images', imageblob[1])
    file2.append('title', this.form.controls[title2].value)
    file2.append('category', this.form.controls[category2].value)
    file2.append('activity', this.form.controls[activity2].value)
    file2.append('material', this.form.controls[material2].value)
    file2.append('goal', this.form.controls[goal2].value)
    file2.append('setUp', this.form.controls[setUp2].value)
    file2.append('pointsForAttention', this.form.controls[pointsForAttention2].value)
    file2.append('tooEasy', this.form.controls[tooEasy2].value)
    file2.append('tooHard', this.form.controls[tooHard2].value)

    file2.append('amountOfPeople', this.form.controls[amountOfPeople2].value)
    file2.append('wheelchair', this.form.controls[wheelchair2].value)
    file2.append('duration', this.form.controls[duration2].value)

    let value
    this.activatedRoute.params.subscribe( params => value = params.id );

    this.apiService.updateActivity(value, file2).subscribe((data) => {
      // this.router.navigate(['/admin/activities'])
    } )

    this.editorGoal2 = false
    this.editorTitle2 = false
    this.editorActivity2 = false
    this.editorMaterial2 = false
    this.editorSetup2 = false
    this.editorPointsForAttention2 = false
    this.editorTooEasy2 = false
    this.editorTooHard2 = false 
  }


  editTitle() {
    console.log();
    
    this.closeEditor()
    this.editorTitle2 = true
    }
  editGoal() {
    this.closeEditor()
    this.editorGoal2 = true
    }
  editActivity() {
    this.closeEditor()
    this.editorActivity2 = true
    }
  editMaterial() {
    this.closeEditor()
    this.editorMaterial2 = true
    }
  editSetup() {
    this.closeEditor()
    this.editorSetup2 = true
    }
  editPointsForAttention() {
    this.closeEditor()
    this.editorPointsForAttention2 = true
    }
  editTooEasy() {
    this.closeEditor()
    this.editorTooEasy2 = true
    }
  editTooHard() {
    this.closeEditor()
    this.editorTooHard2 = true
    }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   category2: ['', Validators.required, ],
    //   wheelchair2: ['', Validators.required],
    //   amountOfPeople2: ['', Validators.required],
    //   duration2: ['', Validators.required],
    //   title2: ['Vul in', Validators.required],
    //   goal2: ['Vul in', Validators.required,  ],
    //   material2: ['Vul in', Validators.required],
    //   activity2: ['Vul in', Validators.required],
    //   setUp2: ['Vul in', Validators.required],
    //   pointsForAttention2: ['Vul in', Validators.required],
    //   tooEasy2: ['Vul in', Validators.required],
    //   tooHard2: ['Vul in', Validators.required],
    //   setupImage: [null],
    //   activity2Image: [null]
    //   })

      this.apiService.getCategories().subscribe((data) => {
        const categories = 'categories'
        this.category2 = data[categories]
      })
      this.getData()
  }


  getData() {
    let value
    this.activatedRoute.params.subscribe( params => value = params.id );

    this.apiService.getSpecificActivity(value).subscribe((data) => {
      const activities = 'activity'
      this.fro = data[activities]
      console.error(this.fro);
      this.setupImg = this.fro[0].setUpImage;
      this.activity2Img = this.fro[0].image;
      this.patchValue()
    })
  }

  patchValue() {
    this.form.patchValue({
      wheelchair2: this.fro[0].wheelchair.toString(),
      amountOfPeople2: this.fro[0].amountOfPeople.toString(),
      duration2: this.fro[0].duration.toString(),
      category2: this.fro[0].category,
      title2: this.fro[0].title,
      goal2:  this.fro[0].goal,
      material2: this.fro[0].material,
      activity2: this.fro[0].activity,
      setUp2: this.fro[0].setUp,
      pointsForAttention2:  this.fro[0].pointsForAttention,
      tooEasy2: this.fro[0].tooEasy,
      tooHard2: this.fro[0].tooHard
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
