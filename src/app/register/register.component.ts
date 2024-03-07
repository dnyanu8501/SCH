import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 formChange:boolean=true;
 registerForm!:FormGroup;
 failData:boolean=false;
  constructor(public fb:FormBuilder ,private apiCallService:ApiCallService , public router:Router) { }

  ngOnInit() {
    this.getData()
  }
  
  getData(){
    this.registerForm=this.fb.group({
 fname:['',[Validators.required]],
 email:['',[Validators.required]],
 contact:['',[Validators.required]],
 own:['',[Validators.required]],
 password:['',[Validators.required]],
    })
  }
  submit(){
    if(this.registerForm.valid){
    this.apiCallService.postApiCall("allMember",this.registerForm.value).subscribe(res=>{
      console.log(res)
      this.failData=false
      this.router.navigateByUrl('/')
    })
   ;}
   else{
    this.failData=true
   }
    
  }
  formChangelayout(){
    console.log("drfsaerf");
    
  }

}
