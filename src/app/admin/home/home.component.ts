import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  BookDetails:any=[]
  currentPage=1
  constructor( public dialog: MatDialog,private apiCallService:ApiCallService,public router:Router) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.apiCallService.getApiCall("addBook").subscribe((res:any)=>{
       console.log(res);
       this.BookDetails=res
    
          
         })
  }

  addBook(){
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  edit(id:any){

    let editData:any=[]
      this.BookDetails.forEach((element:any) => {
       if(id==element.id){
         editData.push(element)
       }
      });
      console.log(editData);
     this.apiCallService.editData=editData
     this.apiCallService.id=id
   this.router.navigateByUrl('/adminModule/addBook')
    
      

  }
  delete(id:any){
    this.apiCallService.deleteApiCall('addBook',id).subscribe((res:any)=>{
           alert("Data Deleted Successfully! . . .")
           this.getData()
         })
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
