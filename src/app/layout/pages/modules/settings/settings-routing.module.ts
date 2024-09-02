import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, title: 'Profile'},
  {path: 'edit-profile', component: EditProfileComponent, title: 'Edit Profile'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
