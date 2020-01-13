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

  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    private location: Location
    ) {

    let value;
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) => {
      console.log(data);
      const activityKey = 'activity';
      this.activity = data[activityKey];
      console.error(this.activity);
    } )
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
      // this.printing = true;
      const banner = document.getElementById('banner');
      const inner = document.getElementById('test');
      const customimg = document.getElementById('customimgs');
      const mainImage = document.getElementById('main_image');
      const mainContent = document.getElementById('main_content');
      const mainTitle = document.getElementById('main_title');

      mainImage.style.position = 'absolute';
      mainContent.style.marginTop = '270px';
      mainTitle.style.marginTop = '360px';
      
      mainTitle.style.marginTop = '210px'
      mainTitle.style.marginLeft = '450px'
      mainTitle.style.position = 'absolute';

      document.body.style.width = '100%';
      document.documentElement.style.width = '100%'
      
      banner.style.position = 'absolute';
      banner.style.top = '0px';
      banner.style.left= '0px';

      inner.style.marginTop = '200px';
      customimg.style.marginTop = '70px';

      const printContents = document.getElementById('outer').innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
  }

}
