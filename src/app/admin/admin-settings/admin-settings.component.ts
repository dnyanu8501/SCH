import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {

  formChange:boolean=true;
  registerForm!:FormGroup;
  id:any
  admin:any
   constructor(public fb:FormBuilder ,private apiCallService:ApiCallService , public router:Router) { }
 
   ngOnInit() {
     this.admin=this.apiCallService.admin
     console.log(">>>",this.apiCallService.admin);
     
     this.getData()
   }
   
   getData(){
     this.registerForm=this.fb.group({
  fname:[this.admin?this.admin[0]?.fname: ''],
  email:[this.admin?this.admin[0]?.email: ''],
  contact:[this.admin?this.admin[0]?.contact: ''],
  own:[this.admin?this.admin[0]?.own: ''],
  password:[this.admin?this.admin[0]?.password: ''],
  id:[this.admin?this.admin[0]?.id: '']
     })
   }
 
   edit(){
      this.apiCallService.patchApiCall("allMember",this.registerForm.value.id,this.registerForm.value).subscribe((res:any)=>{
       console.log(res)
       alert(" User Upadte Successfully")
       this.router.navigateByUrl('/adminModule')
     })
    ;
     
   }
   formChangelayout(){
     console.log("drfsaerf");
     
   }

}
