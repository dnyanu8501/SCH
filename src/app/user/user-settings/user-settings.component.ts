import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  formChange:boolean=true;
 registerForm!:FormGroup;
 id:any
 user:any
  constructor(public fb:FormBuilder ,private apiCallService:ApiCallService , public router:Router) { }

  ngOnInit() {
    this.user=this.apiCallService.user
    console.log(">>>",this.apiCallService.user);
    
    this.getData()
  }
  
  getData(){
    this.registerForm=this.fb.group({
 fname:[this.user?this.user[0]?.fname: ''],
 email:[this.user?this.user[0]?.email: ''],
 contact:[this.user?this.user[0]?.contact: ''],
 own:[this.user?this.user[0]?.own: ''],
 password:[this.user?this.user[0]?.password: ''],
 id:[this.user?this.user[0]?.id: '']
    })
  }

  edit(){
     this.apiCallService.patchApiCall("allMember",this.registerForm.value.id,this.registerForm.value).subscribe((res:any)=>{
      console.log(res)
      alert(" User Upadte Successfully")
      this.router.navigateByUrl('/userModule')
    })
   ;
    
  }
  formChangelayout(){
    console.log("drfsaerf");
    
  }
}
