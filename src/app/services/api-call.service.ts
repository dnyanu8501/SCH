import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url='http://localhost:3000/'
  editData:any
  id:any
  submitBtn!:boolean;
  borrowedpageData:any;
  returnData:any
  remainingData:any
  user:any
  admin:any
  userName:any
   constructor(private http:HttpClient) { }

   postApiCall(endPoint:any,data:any){
     let url=this.url+endPoint
     return this.http.post(url,data)
   }
   getApiCall(endPoint:any){
     let url=this.url+endPoint
     return this.http.get(url)
   }
   patchApiCall(endPoint:any,id:any,data:any){
     let url=this.url+endPoint+"/"+id
     return this.http.patch(url,data)
   }
   deleteApiCall(endPoint:any,id:any){
     let url=this.url+endPoint+"/"+id
     return this.http.delete(url)
   }
}
