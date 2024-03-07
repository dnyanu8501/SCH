import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookForm!:FormGroup;
  submitBtn:any=true
  editId:any
  editData:any
  constructor(private fb:FormBuilder,private apiCallService:ApiCallService,public router:Router) { }

  ngOnInit() {
    this.editData=this.apiCallService.editData
    this.editId=this.apiCallService.id
    this.submitBtn=this.apiCallService.submitBtn
    this.getData()
  }
  ngDoCheck(){
    console.log(".>>>",this.apiCallService.id);
    if(this.apiCallService.id){
     
      
      this.submitBtn=false
    }else{
      this.submitBtn=true
    }
  }

  getData(){
    this.addBookForm=this.fb.group({
      bookName:[this.editData?this.editData[0]?.bookName: ''],
      auther:[this.editData?this.editData[0]?.auther: ''],
      price:[this.editData?this.editData[0]?.price: ''],
      category:[this.editData?this.editData[0]?.category: ''],
      summary:[this.editData?this.editData[0]?.summary: ''],

    })
  }
  addBook(){
this.apiCallService.postApiCall('addBook',this.addBookForm.value).subscribe(res=>{
  console.log(res);
})
   
    
  }
  update(){
    this.apiCallService.patchApiCall('addBook',this.editId,this.addBookForm.value).subscribe(res=>{
      alert('update Successfully')
       this.router.navigateByUrl('/adminModule')
    
    })
  }

}
