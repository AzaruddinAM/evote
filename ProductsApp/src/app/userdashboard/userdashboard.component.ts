import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'Products/product.model';

import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  

  
  
  candidat={};
  constructor(public prodServie: ProductsService,
    public route:ActivatedRoute,
  public routes:Router) { }

  
 
  ngOnInit() {

   
    
    
    this.display();
   
  }
  public candidates:Iproduct[];
  display()
 {
  this.prodServie.getCandidates().subscribe((data)=>{
    this.candidates=JSON.parse(JSON.stringify(data));
  });
 }



 submitMethod2(item)
 {
  console.log("add");
  console.log(item.votecount);
  item.votecount+=1;
  this.prodServie.changeCandidates(item);

  
  // console.log(this.item);
  // router.navigate("/")
 }
}
