import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-borrowed-page',
  templateUrl: './borrowed-page.component.html',
  styleUrls: ['./borrowed-page.component.scss']
})
export class BorrowedPageComponent implements OnInit {
borrowedpageData:any
returnData:any=[]
  constructor(private apiCallService:ApiCallService) { }

  ngOnInit() {
this.borrowedpageData=this.apiCallService.borrowedpageData
console.log(this.borrowedpageData);

  }
  returnBook(id:any){
    let data=this.borrowedpageData.filter((ele:any)=>{
      if(ele.id!=id){
        return ele
      }else{
        this.returnData.push(ele)
      }
      
        })
        this.borrowedpageData=data
        this.apiCallService.returnData=this.returnData
        console.log(this.returnData);
      
      }


}
