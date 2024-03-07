import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
AllMember:any;
email:any;
password:any;
user:any=[]
admin:any=[]
failPass:boolean=false;
  constructor(public apiCallService:ApiCallService,public router:Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiCallService.getApiCall("allMember").subscribe((res:any)=>{
      this.AllMember=res
      console.log(res);
      
    })
  }
  login(){
   
    this.user=[]
    this.admin=[]
    this.AllMember.map((ele:any)=>{
       if(ele.email==this.email && ele.password==this.password){
        if(ele.own=='User'){
          this.failPass=false
          this.apiCallService.userName=ele.fname
          this.user.push(ele)
          this.apiCallService.user=this.user
          this.router.navigateByUrl('/userModule')
        }else if(ele.own=='Admin'){
          this.admin.push(ele)
          this.apiCallService.admin=this.admin
          this.router.navigateByUrl('/adminModule')
        }
       }else{
        this.failPass=true
        // alert(" Please Enter Correct PassWord and UserName")
       }
    })
    
  }
}
