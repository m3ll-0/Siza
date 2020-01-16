import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder} from '@angular/forms'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  
  @ViewChild('activitiesImage', {static: false}) activityImage: ElementRef
  @ViewChild('setup', {static: false}) setup: ElementRef

  selectedFile: File
  activities
  category
  url
 
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
    public dialog: MatDialog
    ) { }

  //   onSelectFile(event) { // called each time file input changes
  //     if (event.target.files && event.target.files[0]) {
  //       var reader = new FileReader();
  
  //       reader.readAsDataURL(event.target.files[0]); // read file as data url
  
  //       reader.onload = (event) => { // called once readAsDataURL is completed
  //         this.url = event.target.result
  //       }
  //     }
  // }

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
    const imageblob = [this.activityImage.nativeElement.files[0], this.setup.nativeElement.files[0]]
    const file = new FormData()
    
    const title = 'title'
    const category = 'category'
    const activity = 'activity'
    const material = 'material'
    const setUp = 'setUp'
    const pointsForAttention = 'pointsForAttention'
    const tooEasy = 'tooEasy'
    const tooHard = 'tooHard'

    file.append('images', imageblob[0])
    file.append('images', imageblob[1])
    file.append('title', this.form.controls[title].value)
    file.append('category', this.form.controls[category].value)
    file.append('activity', this.form.controls[activity].value)
    file.append('material', this.form.controls[material].value)
    file.append('setUp', this.form.controls[setUp].value)
    file.append('pointsForAttention', this.form.controls[pointsForAttention].value)
    file.append('tooEasy', this.form.controls[tooEasy].value)
    file.append('tooHard', this.form.controls[tooHard].value)
  
    this.apiService.addActivity(file).subscribe((data) => {
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
      this.apiService.getCategories().subscribe((data) => {
        const categories = 'categories'
        this.category = data[categories]
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
