import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BorrowedPageComponent } from './borrowed-page/borrowed-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'borrowedPage' ,component:BorrowedPageComponent},
  {path:'userSettings' ,component:UserSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
