import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Iproduct } from 'Products/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})

export class AddCandidateComponent implements OnInit {
  
  constructor(public prodServie: ProductsService,
    public route:ActivatedRoute,
  public routes:Router) { }
  error = "0"
  candidateItem= new Iproduct(null,null,null,null,null,null,null);

  flagUpdate:boolean;
  btn_name:string;
  ngOnInit() {
    
    this.flagUpdate=false;
    if(this.route.snapshot.params._id)
    {
     this.candidateItem=JSON.parse(JSON.stringify(this.route.snapshot.params));
     //this.route.snapshot.params=null;
     console.log(this.candidateItem);

     this.btn_name="update";
     this.flagUpdate=true;

    }
    else
    {

      this.btn_name="add";
      this.flagUpdate=false;
    }
    console.log(this.submitMethod);
  }
  
  submitMethod(form : NgForm)
  {
    
    this.candidateItem.resultflag="false";
    console.log(form.value.resultflag);
    if((form.value.candidatename == null) || 
    (form.value.electionname == null) ||
    (form.value.electionDate == null) || 
    (form.value.description == null) || 
    (form.value.imageUrl == null) || 
    (form.value.votecount == null))
    {
      alert("Please Enter all the Input");
      return 0;
    }
    else{
    
    if(this.flagUpdate==true)
    {
      this.onUpdate();
      this.routes.navigate(['/candidate-list']);
      

    }
    else{
      this.onSubmit();
      this.routes.navigate(['/admindashboard']);
    }
    console.log('redirect');
  }
  }
  onSubmit()
  {

    console.log("add");
    console.log(this.candidateItem)
    this.prodServie.addCandidate(this.candidateItem).subscribe((data)=>{
    alert(JSON.parse(JSON.stringify(data)).msg);

    });
    console.log(this.candidateItem);

  }
  onUpdate()
  {
    console.log("update");
    console.log("entered");

    this.prodServie.editSubmit(this.candidateItem).subscribe((data)=>{
      console.log("updated");


    });

  }


}






