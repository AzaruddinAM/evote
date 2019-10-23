import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  registerUserData = {requestflag:'false',votedflag:'true'}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  
  registerUser() {
    var username = document.forms["RegForm"]["username"];               
    
    var email = document.forms["RegForm"]["email"];      
    var mobilenumber = document.forms["RegForm"]["mobilenumber"];   
    var password = document.forms["RegForm"]["password"];   
    var adhar=document.forms["RegForm"]["adhar number"];
    if (username.value == "")                                  
    { 
        window.alert("Please Enter Your Name"); 
        username.focus(); 
        return false; 
    } 

    
    if (email.value == "")                                   
    { 
        window.alert("Please Enter A Valid Email Address"); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please Enter A Valid Email Address"); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please Enter A Valid Email Address"); 
        email.focus(); 
        return false; 
    }
    if (mobilenumber.value == "")                           
    { 
        window.alert("Please Enter Your Mobile Number."); 
        mobilenumber.focus(); 
        return false; 
    } 

    if (mobilenumber.value.length < 10)                           
    { 
        window.alert("Please Enter A 10 Digit Mobile Number"); 
        mobilenumber.focus(); 
        return false; 
    } 
   
    if (password.value == ""  )                        
    { 
        window.alert("Please Enter A Password"); 
        password.focus(); 
        return false; 
    } 

    if (password.value.length < 8 )                        
    { 
        window.alert("Please Enter a Password of 8 Characters"); 
        password.focus(); 
        return false; 
    } 
    if (adhar.value == ""  )                        
    { 
        window.alert("Please Enter Your Adhar Number");
        adhar.focus(); 
        return false; 
    }
    if (adhar.value.length < 12 )                        
    { 
        window.alert("Please Enter the adhar number with 12 Characters"); 
        adhar.focus(); 
        return false; 
    }
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(this.registerUserData)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/login'])
        
      },
      err => console.log(err)
    )
    
   alert("successfully registered");   
  }

}
