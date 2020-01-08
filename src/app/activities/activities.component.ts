import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';  
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../models/Activity';
import { $ } from 'protractor';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css',
]
})
export class ActivitiesComponent implements OnInit {
  
  activity : Activity;
  printing = false;

  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute 
    ) {

    var value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) =>{
      console.log(data);
      this.activity = data['activity'];
      console.error(this.activity);
    } )
  }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
    }

ngOnInit() {
}

public printScreen()
{
  var originalContents = document.body.innerHTML;

    // this.printing = true;
    var banner = document.getElementById('banner');
    var inner = document.getElementById('test');
    var customimg = document.getElementById('customimgs');
    var main_image = document.getElementById('main_image');
    var main_content = document.getElementById('main_content');
    var main_title = document.getElementById('main_title');

    main_image.style.position = "absolute";
    main_image.style.marginTop = "270px";
    main_content.style.marginTop = "360px";
    
    main_title.style.marginTop = "210px"
    main_title.style.marginLeft = "450px"
    main_title.style.position = "absolute";

    document.body.style.width = "100%";
    document.documentElement.style.width = "100%"
    
    banner.style.position = "absolute";
    banner.style.top = '0px';
    banner.style.left= '0px';

    inner.style.marginTop = "200px";
    customimg.style.marginTop = "70px";

    var printContents = document.getElementById('outer').innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
}

public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  //Id of the table
    html2canvas(data, {
      useCORS : true
    }).then(canvas => {  
      // Few necessary setting options  

      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('activities/5df0f2a953b1b20017a7b821')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = -40;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.activity[0]['activity'] + '.pdf'); // Generated PDF   
    });  
  }  
}
