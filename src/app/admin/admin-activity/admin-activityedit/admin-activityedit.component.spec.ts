import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../Shared/shared.module';
import { AdminActivityeditComponent} from './admin-activityedit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const thiscategory = 'category2'
const thiswheelchair = 'wheelchair2'
const thisamountOfPeople = 'amountOfPeople2'
const thisduration = 'duration2'
const thistitle = 'title2'
const thisgoal = 'goal2'
const thismaterial = 'material2'
const thisactivity = 'activity2'
const thissetUp = 'setUp2'
const thispointsForAttention = 'pointsForAttention2'
const thistooEasy = 'tooEasy2'
const thistooHard = 'tooHard2'

describe('AdminActivityEdit', () => {
  const component: AdminActivityeditComponent;
  const fixture: ComponentFixture<AdminActivityeditComponent>;

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
    const category2 = component.form.controls[thiscategory];
    const wheelchair2 = component.form.controls[thiswheelchair];
    const amountOfPeople2 = component.form.controls[thisamountOfPeople];
    const duration2 = component.form.controls[thisduration];
    const title2 = component.form.controls[thistitle];
    const goal2 = component.form.controls[thisgoal];
    const material2 = component.form.controls[thismaterial];
    const activity2 = component.form.controls[thisactivity];
    const setUp2 = component.form.controls[thissetUp];
    const pointsForAttention2 = component.form.controls[thispointsForAttention];
    const tooEasy2 = component.form.controls[thistooEasy];
    const tooHard2 = component.form.controls[thistooHard];
  
    category2.setValue('anything')
    wheelchair2.setValue('anything')
    amountOfPeople2.setValue('anything')
    duration2.setValue('anything')
    title2.setValue('anything')
    goal2.setValue('anything')
    material2.setValue('anything')
    activity2.setValue('anything')
    setUp2.setValue('anything')
    pointsForAttention2.setValue('anything')
    tooEasy2.setValue('anything')
    tooHard2.setValue('anything')

    expect(category2.valid).toBeTruthy();
    expect(wheelchair2.valid).toBeTruthy();
    expect(amountOfPeople2.valid).toBeTruthy();
    expect(duration2.valid).toBeTruthy();
    expect(title2.valid).toBeTruthy();
    expect(goal2.valid).toBeTruthy();
    expect(material2.valid).toBeTruthy();
    expect(activity2.valid).toBeTruthy();
    expect(setUp2.valid).toBeTruthy();
    expect(pointsForAttention2.valid).toBeTruthy();
    expect(tooEasy2.valid).toBeTruthy();
    expect(tooHard2.valid).toBeTruthy();
  });
});
