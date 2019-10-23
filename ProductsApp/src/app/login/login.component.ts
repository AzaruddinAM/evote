import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email:'', password:'',requestflag:'',votedflag:''}

  constructor(private _auth: AuthService,
    private _router: Router,
    public prodServie: ProductsService,
    ) { }
  
  ngOnInit() {
  }
  
  loginUser () {
    if(this.loginUserData.email == 'admin@mail.com' && this.loginUserData.password == '12345678'){
      localStorage.setItem('admin','true')
      this._router.navigate(['/admindashboard'])      
    }
    else{
      console.log("hai");
      
      
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res.user);
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', res.user.username)
        localStorage.setItem('userId', res.user._id)
        if(res.user.requestflag=='true'&&res.user.votedflag=='true'){
        console.log(res.user);
        res.user.votedflag='false';
        this._router.navigate(['/userdashboard'])
        this.prodServie.changeUsers(res.user);
        
        }
        else if(res.user.votedflag=='false')
        {
          alert("user allready voted....");
        }
        else
        {
          alert("user verification in progress....");
        }
      },
      err => console.log(err)
    ) 
      
      
        
      
  }
}

}
