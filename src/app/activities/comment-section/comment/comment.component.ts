import { Component, OnInit, Input } from '@angular/core';
import { commentViewModel } from './commentViewModel'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input() comment
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

}
