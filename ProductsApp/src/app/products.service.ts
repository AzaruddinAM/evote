import { Injectable } from '@angular/core';
import { Iproduct } from 'Products/product.model';
import { User } from '../app/user.model'
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient,public router:Router) { }
  public candidates:Iproduct[];
  public users:User[];
  getCandidates()
  {
      return this.http.get('http://localhost:3001/candidate');
  }

  getUsers()
  {
      return this.http.get('http://localhost:3001/users');
  }

 

  addCandidate(item)
  {
    console.log("add candidate Called");
    console.log(item);

    return this.http.post('http://localhost:3001/insert',{"candidate":item});
  }
  deleteCandidate(id)
  {
    return this.http.get('http://localhost:3001/delete/'+id);
  }


  deleteUsers(id)
  {
    return this.http.get('http://localhost:3001/deleteusers/'+id);
  }
  deleteallUsers()
  {
    return this.http.get('http://localhost:3001/deleteall');
  }
  updateAll()
  {
    return this.http.post('http://localhost:3001/updateall',{});
  }
  clearAll()
  {
    return this.http.post('http://localhost:3001/clearall',{});
  }



  updateCandidate(id)
  {
    this.http.get('http://localhost:3001/update/'+id).subscribe((data)=>{
      console.log(data);
      this.candidates=JSON.parse(JSON.stringify(data));
      console.log(this.candidates);

     this.router.navigate(['/update/',this.candidates]);
    });
  }

  changeCandidates(item)
  {
    this.http.post('http://localhost:3001/changecandidate/'+item._id,{candidate:item}).subscribe((data)=>{
      console.log(data);
      this.candidates=JSON.parse(JSON.stringify(data));
      console.log(this.candidates);

     this.router.navigate(['/login/']);
    });
  }

  changeUsers(item)
  {
    
    this.http.post('http://localhost:3001/changeusers/'+item._id,{user:item}).subscribe((data)=>{
      console.log(item);
      this.users=JSON.parse(JSON.stringify(data));
      console.log(this.users);

     this.router.navigate(['/',this.candidates]);
    });
  }
  updateUsers(id)
  {
    this.http.get('http://localhost:3001/updateusers/'+id).subscribe((data)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
      console.log(this.users);

     this.router.navigate(['/update/',this.candidates]);
    });
  }
 
  editSubmit(item)
  {
    console.log(item);

    return this.http.post('http://localhost:3001/update',{candidate:item});
  }

  // editSubmituser(item)
  // {
  //   console.log(item);

  //   return this.http.post('http://localhost:3001/update',{user:item});
  // }
}
