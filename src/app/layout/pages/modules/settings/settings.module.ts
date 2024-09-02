import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [ProfileComponent, EditProfileComponent], 
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports:[]
})
export class SettingsModule { }
