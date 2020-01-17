import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';  
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../models/Activity';
import { $ } from 'protractor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css',
]
})
export class ActivitiesComponent implements OnInit {
  
  activity: Activity;
  printing = false;
  opstelling = 'Aandachtspunten';
  amountOfPeopleImageSource: string;
  timeSpanImageSource: string;
  hasAmountOfPeople = false;
  hasTimeSpan = false;

  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    private location: Location
    ) {

    let value;
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) => {
      console.error(data);
      const activityKey = 'activity';
      this.activity = data[activityKey];

      if(this.activity[0].amountOfPeople !== undefined && this.activity[0].amountOfPeople !== null) {
        this.amountOfPeopleImageSource = '../../../assets/images/players_' 
        + this.getAmountOfPeopleImageUri(this.activity[0].amountOfPeople) + '.jpg';   

        this.hasAmountOfPeople = true;
      }

      if(this.activity[0].duration !== undefined && this.activity[0].duration !== null) {
        this.timeSpanImageSource = '../../../assets/images/min_' + this.getTimeSpanImageUri(this.activity[0].duration) + '.png';   
        this.hasTimeSpan = true;
      }
    })
  }

  getTimeSpanImageUri(timespan) {
      if(timespan < 60) {
        return timespan;
      } else if(timespan >= 60) {
        return 60;
      }
  }

  getAmountOfPeopleImageUri(amountOfPeople) {
    if (amountOfPeople >= 2  && amountOfPeople <= 4 ) {
      return '2-4'
    } else if (amountOfPeople >= 2  && amountOfPeople <= 8 ) {
      return '2-8'
    } else if (amountOfPeople >= 4  ) {
        return '4+'
    } else if (amountOfPeople >= 2 ) {
        return '2+'
    } else if (amountOfPeople >= 1 ) {
        return '1+';
    }
  }

  pictNotLoading(event) {
     this.opstelling = '';
    }

    ngOnInit() {
    }

  onGoBack() {
    this.location.back();
  }

  public printScreen() {
      const originalContents = document.body.innerHTML;
      const printContents = document.getElementById('outer').innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
  }
}
