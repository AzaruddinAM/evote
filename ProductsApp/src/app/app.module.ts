import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import{NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { HeaderComponent } from './header/header.component';
import { ApproutingModule } from './approuting/approuting.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewusersComponent } from './viewusers/viewusers.component';




@NgModule({
  declarations: [
    
    AppComponent,
    CandidateListComponent,
    AddCandidateComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ViewusersComponent
    
  ],
  imports: [
  
    BrowserModule,
    HttpClientModule,
    ApproutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
