import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { MatDialog } from '@angular/material/dialog';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
BookDetails:any=[]
borrowedBookData:any=[]
returnData=[]
remainingData:any=[]
remainAllData:any=[]

  constructor(private apiCallService:ApiCallService,public router:Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.returnData=this.apiCallService.returnData
     this.remainAllData=this.apiCallService.remainingData
     console.log(">>>",this.remainAllData);
     
if(this.returnData){

} 
  if(!this.returnData){
    this.getData()
    // this.BookDetails.concat(this.returnData)
  }
  else{
    this.BookDetails=this.remainAllData.concat(this.returnData)
  }
  }

  getData(){
    this.apiCallService.getApiCall("addBook").subscribe((res:any)=>{
      this.BookDetails=res
      console.log(res);
      
    })
  }
  borrowBook(id:any){

 this.remainingData=[]
    let data=this.BookDetails.filter((ele:any)=>{
  if(ele.id!=id){
    this.remainingData.push(ele)
    return ele
  }else{
    this.borrowedBookData.push(ele)
  }
  
    })
    this.BookDetails=data
    this.apiCallService.remainingData=this.remainingData
    this.apiCallService.borrowedpageData=this.borrowedBookData
    console.log(this.borrowedBookData);
  // this.router.navigateByUrl('userModule/borrowedPage')
  }
  openSettings(){
    console.log("open dialog");

      const dialogRef = this.dialog.open(UserSettingsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log("Dialog result:");
      });
    
  }
  logout(){
    let text;
    if (confirm("Are You Sure!") == true) {
      
      this.router.navigateByUrl('/')
    } else {
      text = "You canceled!";
    }
  }

}
