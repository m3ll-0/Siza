import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { Category } from '../models/Category';
import {HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sizasports',
  templateUrl: './sizasports.component.html',
  styleUrls: ['./sizasports.component.css']
})
export class SizasportsComponent implements OnInit {
  categories : Category[];
  isLoading = true;
  keyCombination = "";

  constructor(private apiService: ApiServiceService, private router : Router) {
    this.apiService.getCategoriesWithoutParent().subscribe((data) =>{
      this.categories = data['categories'];
      this.isLoading = false;
    } )
   }

  ngOnInit() {
     }


     goToCreateSuggestion()
     {
       console.log('goToCreateSuggestion()')
       this.router.navigate(['/suggestions/create'])
     }


    //////////////////////////// NOT IMPORTANT CODE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 

      if(event.key === 'Enter')
      {
        this.keyCombination = '';
      }
      else{
        this.keyCombination += event.key;
      }

      if(this.keyCombination == "kraai")
      {
        this.crowMode();
      }

      if(this.keyCombination == "nenette")
      {
        this.nenetteMode();
      }
    }
    
  crowMode()
  {
    var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "https://media1.giphy.com/media/gEG1j8eBvHVYs/giphy.gif";}
    document.body.style.background = "url(https://media0.giphy.com/media/i7HfyYPbE8BQQ/source.gif)";
    this.playAudio();
  }

  nenetteMode()
  {
    var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "../../assets/images/nenette.jpg";}
    document.body.style.background = "url(../../assets/images/nenette.jpg)";
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src =  '../../assets/sounds/crow.mp3';
    audio.load();
    audio.play();
  }

}
