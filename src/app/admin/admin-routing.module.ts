import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { UserListBorrowComponent } from './user-list-borrow/user-list-borrow.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'adminSettings',component:AdminSettingsComponent},
  {path:'userList',component:UserListBorrowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
