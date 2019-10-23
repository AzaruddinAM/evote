import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'Products/product.model';
import {ProductsService} from '../products.service';
import {AddCandidateComponent} from '../add-candidate/add-candidate.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
  providers:[AddCandidateComponent]
})
export class CandidateListComponent implements OnInit {


  constructor(public  productsService:ProductsService, public addcandidate:AddCandidateComponent,private router:Router) {

  }

  ngOnInit() {
    console.log(this.productsService.getCandidates());
    this.display();

  }
 public candidates:Iproduct[];
 display()
 {
  this.productsService.getCandidates().subscribe((data)=>{
    this.candidates=JSON.parse(JSON.stringify(data));
    console.log(this.candidates);
  });
 }
  pageTitle:String = "Candidate List";

  flag:Boolean=false;
  toggleImage()
  {
    console.log('clicked');

    this.flag=!this.flag;
  }
  onDelete(id)
  {
    console.log("hello");

    this.productsService.deleteCandidate(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.ngOnInit();

    });
  }
  onUpdate(id)
  {
    //alert("hai");
    this.productsService.updateCandidate(id);
  }
  updateall()
 {
   console.log("hello");

   this.productsService.updateAll().subscribe((data)=>{
     alert(JSON.parse(JSON.stringify(data)).msg);
     this.ngOnInit();

   });
 }
 clearall()
 {
   console.log("hello");

   this.productsService.clearAll().subscribe((data)=>{
     alert(JSON.parse(JSON.stringify(data)).msg);
     this.ngOnInit();

   });
 }
}
