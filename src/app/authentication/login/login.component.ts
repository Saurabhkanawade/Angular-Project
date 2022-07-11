import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userId=0;

  constructor(private activatedRoute : ActivatedRoute){
    
    this.activatedRoute.params.subscribe((params)=>{

      const interValue=params;

      this.userId=interValue['userId'];

      console.log(params);
      
    })
  } 

  ngOnInit(): void {
  }

}
