import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../activities/comment-section/comment-section.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.css']
})
export class TestModuleComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  showDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '450px',
      height: '200px'
    }); 
    setTimeout(() => {
      dialogRef.close();
    }, 10000);
  }
}
