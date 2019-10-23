import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { CandidateListComponent } from '../candidate-list/candidate-list.component';
import { AddCandidateComponent } from '../add-candidate/add-candidate.component';
import { HomeComponent } from '../home/home.component';

import {LoginComponent } from '../login/login.component';
import {SignupComponent } from '../signup/signup.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { ViewusersComponent } from '../viewusers/viewusers.component';


const routes:Routes=[{
  path:"",component:HomeComponent
},

{
  path:"signup", component:SignupComponent
},
{
  path:"login", component:LoginComponent
}, 
{
  path:"candidate-list", component:CandidateListComponent
},
{
  path:"add",component:AddCandidateComponent
},
{
  path:"update",component:AddCandidateComponent
},
{
  path:"userdashboard",component:UserdashboardComponent
},
{
  path:"admindashboard",component:AdmindashboardComponent
},
{
  path:"viewusers",component:ViewusersComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class ApproutingModule { }
