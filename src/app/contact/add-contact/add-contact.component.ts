import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {

id=0;
name="";


constructor(private activatedRoute:ActivatedRoute){

  activatedRoute.queryParams.subscribe((params)=>{
    this.id=params['id']; 
    this.name=params['name']; 
  })
  
}

 students=[
  {
 firstName:'saurabh',
 lastName:'kanawade',
 dob:'30-sep-2000'
  },
  {
 firstName:'shankar',
 lastName:'kanawade',
 dob:'30-sep-2000'
  },
  {
 firstName:'shailesh',
 lastName:'kanawade',
 dob:'30-sep-2000'
  },
  {
 firstName:'jayashree',
 lastName:'kanawade',
 dob:'30-sep-2000'
  },
  {
  firstName:'shruti',
  lastName:'karpe',
  dob:'12-oct-2000',
  }
];

ngOnInit(): void {
}
}