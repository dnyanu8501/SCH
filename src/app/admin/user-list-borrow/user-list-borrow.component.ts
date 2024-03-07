import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { ViewuserDetailsComponent } from '../viewuser-details/viewuser-details.component';
@Component({
  selector: 'app-user-list-borrow',
  templateUrl: './user-list-borrow.component.html',
  styleUrls: ['./user-list-borrow.component.scss']
})
export class UserListBorrowComponent implements OnInit {
  borrowedpageData:any;
  user:any
  userName:any
  constructor(public apiCallService:ApiCallService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userName=this.apiCallService.userName
    
    
    this.borrowedpageData=this.apiCallService.borrowedpageData
    console.log(this.borrowedpageData);
 
  }


}
