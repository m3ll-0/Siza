import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { Category } from '../models/Category';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-sizasports',
  templateUrl: './sizasports.component.html',
  styleUrls: ['./sizasports.component.css']
})
export class SizasportsComponent implements OnInit {
  categories : Category[];
  isLoading = true;
  keyCombination = "";

  constructor(private apiService: ApiServiceService) {
    this.apiService.getCategoriesWithoutParent().subscribe((data) =>{
      this.categories = data['categories'];
      this.isLoading = false;
    } )
   }

  ngOnInit() {
     }

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
    }

    
  crowMode()
  {
    var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = "https://media1.giphy.com/media/gEG1j8eBvHVYs/giphy.gif";}
    document.body.style.background = "url(https://media0.giphy.com/media/i7HfyYPbE8BQQ/source.gif)";
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src =  '../../assets/sounds/crow.mp3';
    audio.load();
    audio.play();
  }

}
