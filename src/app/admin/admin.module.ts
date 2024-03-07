import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { UserListBorrowComponent } from './user-list-borrow/user-list-borrow.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewuserDetailsComponent } from './viewuser-details/viewuser-details.component';
@NgModule({
  declarations: [
    HomeComponent,
    AddBookComponent,
    AdminSettingsComponent,
    UserListBorrowComponent,
    ViewuserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AdminModule { }
