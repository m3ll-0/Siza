import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../Shared/shared.module';
import { AdminActivityeditComponent} from './admin-activityedit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const thiscategory = 'category'
const thiswheelchair = 'wheelchair'
const thisamountOfPeople = 'amountOfPeople'
const thisduration = 'duration'
const thistitle = 'title'
const thisgoal = 'goal'
const thismaterial = 'material'
const thisactivity = 'activity'
const thissetUp = 'setUp'
const thispointsForAttention = 'pointsForAttention'
const thistooEasy = 'tooEasy'
const thistooHard = 'tooHard'

describe('AdminActivityCardComponent', () => {
  let component: AdminActivityeditComponent;
  let fixture: ComponentFixture<AdminActivityeditComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, SharedModule],
      declarations: [ AdminActivityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form category filled', () => {
    const category = component.form.controls[thiscategory];
    category.setValue('anything')
    expect(category.valid).toBeTruthy();
  });
  
  it('form not fully filled fails', () => {
    const category = component.form.controls[thiscategory];
    category.setValue('anything')
    expect(component.form.valid).toBeFalsy();
  });

  it('form fully filled succeeds', () => {
    const category = component.form.controls[thiscategory];
    const wheelchair = component.form.controls[thiswheelchair];
    const amountOfPeople = component.form.controls[thisamountOfPeople];
    const duration = component.form.controls[thisduration];
    const title = component.form.controls[thistitle];
    const goal = component.form.controls[thisgoal];
    const material = component.form.controls[thismaterial];
    const activity = component.form.controls[thisactivity];
    const setUp = component.form.controls[thissetUp];
    const pointsForAttention = component.form.controls[thispointsForAttention];
    const tooEasy = component.form.controls[thistooEasy];
    const tooHard = component.form.controls[thistooHard];
    
    category.setValue('anything')
    wheelchair.setValue('anything')
    amountOfPeople.setValue('anything')
    duration.setValue('anything')
    title.setValue('anything')
    goal.setValue('anything')
    material.setValue('anything')
    activity.setValue('anything')
    setUp.setValue('anything')
    pointsForAttention.setValue('anything')
    tooEasy.setValue('anything')
    tooHard.setValue('anything')

    expect(component.form.valid).toBeTruthy();
  });
});
