import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css',
]
})
export class ActivitiesComponent implements OnInit {
  
  activities
 
  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute 
    ) {

    var value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) =>{
      console.log(data);
      this.activities = data['activity']; 
    } )
  }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
    }

ngOnInit() {
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
      pdf.save(this.activities[0]['activity'] + '.pdf'); // Generated PDF   
    });  
  }  
}
